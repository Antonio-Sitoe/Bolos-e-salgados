import React from 'react';
import Link from 'next/link';
import { BiUser } from 'react-icons/bi';
import { useRouter } from 'next/router';
import Button from '../../components/Forms/Button';
import Input from '../../components/Forms/Input';
import ErrorServer from '../../components/Helper/ErrorServer';
import { UserContext } from '../../Context/UserContext';
import useForm from '../../hooks/useForm';
import { Container, Title } from '../../styles/styles';
import { LoginGet as Login } from './styles';

const LoginGet = () => {
  const { userLogin, error, loading, isAuthenticate } =
    React.useContext(UserContext);
  const navigate = useRouter();
  const username = useForm('email');
  const password = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
      navigate.push('/acount');
    }
  };

  React.useEffect(() => {
    if ((isAuthenticate)) {
      navigate.push('/acount')
    }
  }, [isAuthenticate, navigate])

  return (
    <Container>
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
        <Link href='login/forgot'>Esqueci a minha senha !</Link>
        <Button loading={loading}>
          <BiUser />
          {loading ? '...Carregando' : 'Entrar'}
        </Button>

        <p>
          Ainda nao possui uma conta ? <Link href='login/create'>Registar</Link>
        </p>
      </Login>
    </Container>
  );
};

export default LoginGet;
