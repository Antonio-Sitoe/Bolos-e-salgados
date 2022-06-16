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
import useForm from '../../../hooks/useForm';
import { UserContext } from '../../../Context/UserContext';
import Loading from '../../../components/Helper/Loading';

const ResetPassword = () => {
   const { user, isAuthenticate } = React.useContext(UserContext);
  const password = useForm('password');
  const passConfirm = useForm('password');

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

  if (user && isAuthenticate) {
    router.replace('/user');
    return <Loading />;
  }
  return (
    <LoginLayault>
      <Login onSubmit={handleSubmit}>
        <Title>Redifinir a senha</Title>
        <Input
          label='Senha'
          name='senha'
          type='password'
          placeholder='Digite o sua senha'
          id='senha'
          error={password.error}
          onBlur={password.onBlur}
          onChange={password.onChange}
          value={password.value}
        />
        <Input
          name='confirme'
          label='Confirme a senha'
          type='password'
          placeholder='Confirme a sua senha'
          {...passConfirm}
          id='confirme'
          error={passConfirm.error}
          onBlur={passConfirm.onBlur}
          onChange={passConfirm.onChange}
          value={passConfirm.value}
        />
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

export default ResetPassword;
