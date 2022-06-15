import React from 'react';
import Link from 'next/link';

import Input from '../../../components/Forms/Input';
import Button from '../../../components/Forms/Button';
import LoginLayault from '../../../components/LoginLayault/LoginLayault';
import router from 'next/router';

import { Title } from '../../../styles/styles';
import { LoginGet as Login } from '../styles';
import { BiKey } from 'react-icons/bi';

import { BiArrowBack } from 'react-icons/bi';
import { FORGOTTEN_PASSWORD } from '../../../services/Api';
import { UserContext } from '../../../Context/UserContext';
import Loading from '../../../components/Helper/Loading';

const LoginPassoword = () => {
  const { isAuthenticate } = React.useContext(UserContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { url, options } = FORGOTTEN_PASSWORD({
      email: 'antoniositoehl@gmail.com',
    });
    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((json) => console.log(json))

      .catch((error) => {
        console.log('An error occurred:', error.response);
      });
  };

  if (isAuthenticate === true) {
    router.push('/user');
    return <Loading />;
  }
  return (
    <LoginLayault>
      <Login onSubmit={handleSubmit}>
        <Title>Recuperar senha</Title>
        <p>
          Para recuperar a sua senha, digite o seu email no campo abaixo ! apos
          clicar em enviar ira receber um e-mail dentro de instantes
        </p>
        <Input placeholder='Digite o seu Email' />
        <Button>
          <BiKey /> Enviar
        </Button>
        <Link href={'/login'}>
          <a>
            <BiArrowBack /> Voltar para Login
          </a>
        </Link>
      </Login>
    </LoginLayault>
  );
};

export default LoginPassoword;
