import { React } from 'react';
import './Create.css'; 

const Create = () => {
  async function enviarDados() {
    try {
      const response = await fetch("http://localhost:3000/users/create", {
        method: "POST",
        body: JSON.stringify({
          fullName: `${document.getElementById("nome").value}`,
        }),
      });
      if (response.status == 200) {
        alert("Usuário cadastrado com sucesso");
      } else {
        alert("CPF/Email/Username já existe");
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="space">
      {/* Lado esquerdo */}
      <div className="space-left">
        <h1>Não tem uma conta? Sem problema.</h1>
        <p>
          Faça seu cadastro na BikeStation, <br />
          onde a tecnologia se une à mobilidade
        </p>
      </div>

      {/* Lado direito */}
      <div className="space-right">
        <h1>Crie uma conta</h1>

        {/* As imagens vêm da pasta public */}
        <img className="logo" src="/img/logo.png" alt="logo" />
        <img className="bikeCreate" src="/img/bikeCreate.png" alt="bikeCreate" />

        <form className="form-container">
          <label htmlFor="nome">Nome e Sobrenome</label>
          <input type="text" id="nome" name="nome" />

          <label htmlFor="usuario">Nome de Usuário</label>
          <input type="text" id="usuario" name="usuario" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="cpf">CPF</label>
          <input type="text" id="cpf" name="cpf" />

          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" name="senha" />
        </form>

        <button onClick={enviarDados} className="criar-btn" type="submit">Criar</button>
      </div>
    </div>
  );
};

export default Create;
