import React from 'react';
import { BiUser } from 'react-icons/bi';
import Button from '../../../../components/Forms/Button';
import Input from '../../../../components/Forms/Input';
import { EmailStyle } from '../../styles';
import useForm from '../../../../hooks/useForm';
import { UserContext } from '../../../../Context/UserContext';
import { ErrorServer } from '../../../../Helper/styles';

const EmailLogin = ({ setOpen }) => {
  const [havaAccount, setHaveAccount] = React.useState(false);
  const { userLogin, userRegister, error, loading } =
    React.useContext(UserContext);

  const emailLogin = useForm('email');
  const passwordLogin = useForm();

  const name = useForm('name');
  const emailCreate = useForm('email');
  const passwordCreate = useForm('password');

  function handleHaveAccount(e) {
    e.preventDefault();
    setHaveAccount(!havaAccount);
  }

  async function handleLogin(e) {
    e.preventDefault();
    if (emailLogin.validate() && passwordLogin.validate()) {
      await userLogin(emailLogin.value, passwordLogin.value);
    }
  }
  async function handleCreateAccount(e) {
    e.preventDefault();
    if (
      name.validate() &&
      emailCreate.validate() &&
      passwordCreate.validate()
    ) {
      await userRegister(name.value, emailCreate.value, passwordCreate.value);
    }
  }
  return (
    <>
      {havaAccount ? (
        <EmailStyle onSubmit={handleCreateAccount}>
          <p>
            Ja tenho uma conta ? entao{' '}
            <a href='https://' onClick={handleHaveAccount}>
              clique aqui
            </a>
          </p>
          <Input
            label='Nome'
            type='text'
            placeholder='Digite o seu Nome'
            name='name'
            id='name'
            {...name}
          />
          <Input
            label='Email'
            type='email'
            placeholder='Digite o seu Email'
            name='emailCreate'
            id='emailCreate'
            {...emailCreate}
          />
          <Input
            label='Password'
            type='password'
            placeholder='Digite a sua senha'
            name='passwordCreate'
            id='passwordCreate'
            {...passwordCreate}
          />
          <Button
            loading={loading}
            onClick={() =>
              setOpen((anterior) => {
                return { ...anterior, isData: true };
              })
            }
          >
            <BiUser />
            Criar conta
          </Button>
          <ErrorServer error={error} />
        </EmailStyle>
      ) : (
        <EmailStyle onSubmit={handleLogin}>
          <p>
            Ainda nao possui uma conta,{' '}
            <a href='https://' onClick={handleHaveAccount}>
              clique aqui
            </a>{' '}
          </p>
          <Input
            label='Email'
            type='email'
            placeholder='Digite o seu Email'
            name='emailLogin'
            id='emailLogin'
            {...emailLogin}
          />
          <Input
            label='Password'
            type='password'
            placeholder='Digite a sua senha'
            name='passwordLogin'
            id='passwordLogin'
            {...passwordLogin}
          />
          <Button
            loading={loading}
            onClick={() =>
              setOpen((anterior) => {
                return { ...anterior, isData: true };
              })
            }
          >
            <BiUser />
            Entrar
          </Button>
          <ErrorServer error={error} />
        </EmailStyle>
      )}
    </>
  );
};

export default EmailLogin;
