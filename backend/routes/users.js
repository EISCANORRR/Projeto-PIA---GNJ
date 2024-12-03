var express = require('express');
var router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

router.get("/all", async (req, res) => {
  try {
    const allUsers = await prisma.user.findMany()
    return res.status(200).json({allUsers});
  } catch (error) {
    res.status(400).json({'Erro': error});
  }
});
 
router.get("/listUser/:cpf", async (req, res) => {
  try {
    const cpfUser = req.params.cpf; 
    const user = await prisma.user.findFirst({
      where: {
        cpf: cpfUser
      }
    });
    return res.status(200).json({user});
  } catch (error) {
    res.status(400).json({'Erro': error});
  }
});

router.post('/create', async (req, res) => {
  try {
    const newUser = req.body; 
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { cpf: newUser.cpf },
          { username: newUser.username },
          { email: newUser.email }
        ]
      }
    });
    if (existingUser) {
      if (newUser.cpf === existingUser.cpf) {
        return res.status(400).send('O CPF já foi cadastrado.');
      }
      if (newUser.username === existingUser.username) {
        return res.status(400).send('O nome já foi cadastrado.');
      }
      if (newUser.email === existingUser.email) {
        return res.status(400).send('O e-mail já foi cadastrado.');
      }
    }
    console.log(newUser)
    const user = await prisma.user.create({
      data: {
          ...newUser
        }
    })
    res.send('Usúario cadastrado com sucesso')
  } catch (error) {
    console.log(error)
  }
}); 

router.delete('/delete/:cpf', async (req, res) => {
  try {
    const cpfUser = req.params.cpf; 
    const user = await prisma.user.findUnique({
      where: {
        cpf: cpfUser
      }                                                                                                                                            
    });
    if (!user) {
      return res.status(404).json({'Erro': 'O usuário requisitado não foi encontrado'});
    }
    await prisma.user.delete({
      where: {
        cpf: cpfUser
      }
    });
    return res.status(200).send('Usuário deletado com sucesso');
  } catch (error) {
    res.status(400).json({'Erro': error});
  };
})

module.exports = router;
