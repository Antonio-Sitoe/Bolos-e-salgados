import React from 'react';
import { Subtitle, UserContent } from './styles';
import { Container } from '../../styles/styles';
import UserLayout from '../../components/Usercomponents/UserLayout';
import UserDataList from '../../components/Usercomponents/UserDataList';
import { UserContext } from '../../Context/UserContext';
import Loading from '../../Helper/Loading';
import Head from 'next/head';

const User = () => {
  const { isAuthenticate, user } = React.useContext(UserContext);

  if (isAuthenticate)
    return (
      <>
        <Head>
          <title>Conta de {user.username}</title>
          <meta name='description' content='Minha conta' />
        </Head>
        <Container>
          <UserLayout>
            <UserContent>
              <Subtitle>Dados pessoas</Subtitle>
              <UserDataList />
            </UserContent>
          </UserLayout>
        </Container>
      </>
    );
  return <Loading />;
};

export default User;
