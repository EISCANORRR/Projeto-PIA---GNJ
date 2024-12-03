import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./search.css";

const Search = () => {
  const navigate = useNavigate();
  function changePage() {
    navigate(`/Delete`);
  }
  useEffect(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const cpfParam = urlParams.get("cpf");
    if (!cpfParam) {
      return;
    }
    try {
      const response = await fetch(`http://localhost:3000/users/listUser/${parseInt(cpfParam)}`, { method: "GET" });
      const data = await response.json();
      document.getElementById("nome").innerText = data.user.fullName;
      document.getElementById("usuario").innerText = data.user.username;
      document.getElementById("email").innerText = data.user.email;
      document.getElementById("cpf").innerText = data.user.cpf;
      document.getElementById("senha").innerText = data.user.password;
    } catch (error) {
      console.log(error)
    }
  }, []);
  return (
    <>
      <div class="user">
        <img className="fotoPerfil" src="" alt="fotoPerfil" />
        <div className="username">
          <p>username</p>
        </div>
        <div className="nomeCompleto">
          <p>nomeCompleto</p>
        </div>
        <form action="" method="get" className="form-container">
          <label htmlFor="nome">Nome e Sobrenome</label>
          <div id="nome" />

          <label htmlFor="usuario">Nome de Usuário</label>
          <div id="usuario" />

          <label htmlFor="email">Email</label>
          <div id="email" />

          <label htmlFor="cpf">CPF</label>
          <div id="cpf" />

          <label htmlFor="senha">Senha</label>
          <div id="senha" />

          <input type="text" name="cpf" id="cpf" required />
          <button type="submit" value="Submit"></button>
        </form>
        <button onClick={changePage}></button>
      </div>
    </>
  );
};

export default Search;
