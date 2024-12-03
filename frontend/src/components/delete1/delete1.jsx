import { React, useEffect } from "react";
import "./delete1.css";

const Delete = () => {
  useEffect( async () => {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const cpfParam = urlParams.get("cpf");
      if (!cpfParam) {
        return;
      }
      const response = await fetch(`http://localhost:3000/users/delete/${parseInt(cpfParam)}`, {method: "DELETE"});
      if (response.status == 200) {
        alert("Usuário deletado com sucesso!");
      } else {
        alert("Usuário inexistente!");
      }
    } catch (error) {
      console.log(error);
    }
  }, [])
  return (
    <>
      <form action="" method="get" className="form-container">
        <input type="text" name="cpf" id="cpf" required />
        <button type="submit" value="Submit"></button>
      </form>
    </>
  );
};

export default Delete;
