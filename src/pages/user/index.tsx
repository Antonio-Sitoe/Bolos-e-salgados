import React from 'react';
import { UserContext } from '../../Context/UserContext';
import { Subtitle, UserContent, UserDash, UserIntro, UserMain, UserPage } from './styles';

import UserAccountEdit from './UserAccountEdit';
import UserAccountList from './UserAccountList';

import { Container, Title } from '../../styles/styles';
import Link from 'next/link';

const User = () => {
  const { isAuthenticate, UserLogout } = React.useContext(UserContext);
  const user = {
    username: 'Antonio sitoe'
  }
  const handleLogout = (e) => {
    e.preventDefault();
    UserLogout();
  };

  // if (isAuthenticate)
    return (
      <Container>
        <UserPage>
          <UserIntro>
            <Title>Bem vindo, {user.username} </Title>
          </UserIntro>
          <UserMain>
            <UserDash>
              <ul>
                <li>
                  <Link href='user'>
                    Dados
                  </Link>
                </li>
                <li>
                  <Link href='user/order'>Meus pedidos</Link>
                </li>
                <li>
                  <Link href='logout' >
                    <a onClick={handleLogout}>
                      Sair
                    </a>
                  </Link>
                </li>
              </ul>
            </UserDash>
            <UserContent>
              <Subtitle>Dados pessoas</Subtitle>
              {/* <UserAccountList />
              <UserAccountEdit /> */}
            </UserContent>
          </UserMain>
        </UserPage>
      </Container>
    );
  return <p>Nao esta autenticado</p>
};

export default User;
