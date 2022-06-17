import React from 'react';
import { Subtitle, UserContent } from './styles';
import { Container } from '../../styles/styles';
import UserLayout from '../../components/Usercomponents/UserLayout';
import UserDataList from '../../components/Usercomponents/UserDataList';
import { UserContext } from '../../Context/UserContext';
import Loading from '../../components/Helper/Loading';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';
import Router from 'next/router';

const User = () => {
  const { isAuthenticate, error } = React.useContext(UserContext);
  if (isAuthenticate === false) return <Loading />;
  if (error) Router.push('/login');
  return (
    <Container>
      <UserLayout>
        <UserContent>
          <Subtitle>Dados pessoas</Subtitle>
          <UserDataList />
        </UserContent>
      </UserLayout>
    </Container>
  );
};

export default User;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = nookies.get(ctx);

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  }

  return {
    props: {},
  };
};
