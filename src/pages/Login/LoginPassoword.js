import React from "react";
import Button from "../../components/Forms/Button";
import Input from "../../components/Forms/Input";
import { Title } from "../../styles/styles";
import { LoginGet as Login } from "./styles";
import { BiKey } from "react-icons/bi";
import { FORGOTTEN_PASSWORD } from "../../services/Api";
const LoginPassoword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { url, options } = FORGOTTEN_PASSWORD({
      email: "antoniositoehl@gmail.com",
    });
    fetch(url, options)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => console.log(json))

      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };
  return (
    <Login onSubmit={handleSubmit}>
      <Title>Recuperar senha</Title>
      <p>
        Para recuperar a sua senha, digite o seu email no campo abaixo ! apos
        clicar em enviar ira receber um e-mail dentro de instantes
      </p>
      <Input placeholder="Digite o seu Email" />
      <Button>
        <BiKey /> Enviar
      </Button>
    </Login>
  );
};

export default LoginPassoword;
