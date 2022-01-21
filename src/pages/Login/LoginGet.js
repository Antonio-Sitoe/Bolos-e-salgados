import React from 'react';
import Input from '../../components/Forms/Input';
import Button from '../../components/Forms/Button';
import useForm from '../../hooks/useForm';
import ErrorServer from '../../components/Helper/ErrorServer';

import { Link, Navigate, useNavigate } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { LoginGet as Login } from './styles';
import { Title } from '../../styles/styles';
import { UserContext } from '../../Context/UserContext';

const LoginGet = () => {
  const { userLogin, error, loading, isAuthenticate } =
    React.useContext(UserContext);
  const navigate = useNavigate();
  const username = useForm('email');
  const password = useForm();

  const handleSubmit =  (e) => {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
      navigate('/acount');
    }
  };

  if (isAuthenticate) return <Navigate to='/acount' />;
  return (
    <Login onSubmit={handleSubmit}>
      <Title>Entrar</Title>
      {error && <ErrorServer error={error} />}
      <Input
        type='email'
        placeholder='Digite o seu email'
        name='email'
        label='Email'
        id='email'
        {...username}
      />
      <Input
        type='password'
        placeholder='Digite a sua senha'
        name='Senha'
        label='Senha'
        {...password}
      />
      <Link to='forgot'>Esqueci a minha senha !</Link>
      <Button loading={loading}>
        <BiUser />
        {loading ? '...Carregando' : 'Entrar'}
      </Button>

      <p>
        Ainda nao possui uma conta ? <Link to='create'>Registar</Link>
      </p>
    </Login>
  );
};

export default LoginGet;
