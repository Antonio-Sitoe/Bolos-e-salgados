import React from 'react';
import { Subtitle, UserContent } from './styles';
import { Container } from '../../styles/styles';
import UserLayout from '../../components/Usercomponents/UserLayout';
import UserDataList from '../../components/Usercomponents/UserDataList';
import { UserContext } from '../../Context/UserContext';
import Loading from '../../components/Helper/Loading';

const User = () => {
  const { isAuthenticate, loading } = React.useContext(UserContext);

  if (loading) return <Loading />;
  if (isAuthenticate)
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
  else return null;
};

export default User;
