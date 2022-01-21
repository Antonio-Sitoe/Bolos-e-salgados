import React from 'react';
import Button from '../../components/Forms/Button';
import Input from '../../components/Forms/Input';
import { Title } from '../../styles/styles';
import { BiUser } from 'react-icons/bi';
import { LoginGet as Login } from './styles';

import ErrorServer from '../../components/Helper/ErrorServer';
import { UserContext } from '../../Context/UserContext';
import useForm from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';

const LoginCreate = () => {
  const { error, userRegister, loading, setError } =
    React.useContext(UserContext);
  const name = useForm('name');
  const email = useForm('email');
  const password = useForm('password');
  const passConfirm = useForm('password');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name.validate() && email.validate() && password.validate()) {
      if (password.value === passConfirm.value) {
        userRegister(name.value, email.value, password.value);
        navigate('/login');
        return true;
      } else {
        setError('As senhas não coincidem, tente novamente');
        return false;
      }
    }
  };
  return (
    <Login onSubmit={handleSubmit}>
      <Title>Crie sua conta</Title>
      <ErrorServer error={error} />
      <Input
        name='nome'
        label='Nome'
        placeholder='Digite o seu nome'
        {...name}
      />
      <Input
        name='Email'
        label='Email'
        placeholder='Digite o seu Email'
        {...email}
      />
      <Input
        label='Senha'
        name='senha'
        type='password'
        placeholder='Digite o sua senha'
        {...password}
      />
      <Input
        name='confirme'
        label='Confirme a senha'
        type='password'
        placeholder='Confirme a sua senha'
        {...passConfirm}
      />

      <Button disabled={loading}>
        <BiUser />
        Criar conta
      </Button>
    </Login>
  );
};

export default LoginCreate;
