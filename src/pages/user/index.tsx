import React from 'react';
import { Subtitle, UserContent } from './styles';
import { Container } from '../../styles/styles';
import UserLayout from '../../components/Usercomponents/UserLayout';
import UserDataList from '../../components/Usercomponents/UserDataList';
import { UserContext } from '../../Context/UserContext';
import Loading from '../../components/Helper/Loading';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';

const User = () => {
  const { isAuthenticate } = React.useContext(UserContext);
  if (isAuthenticate === false) return <Loading />;
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
 
  if (token === undefined) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  }

  return {
    props: { error: true },
  };
};
