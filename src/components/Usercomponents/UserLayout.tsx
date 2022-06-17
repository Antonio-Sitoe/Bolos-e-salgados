import Link from 'next/link';
import React from 'react';
import { UserContext } from '../../Context/UserContext';
import { Container, Title } from '../../styles/styles';
import {
  UserDash,
  UserIntro,
  UserMain,
  UserPage,
} from '../../pages/user/styles';

const UserLayout = ({ children }) => {
  const { UserLogout, user } = React.useContext(UserContext);
  function handleLogout() {
    const confirm = window.confirm('Deseja terminar a seccao?');
    if (confirm) UserLogout();
  }
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
                <Link href='/user'>Dados</Link>
              </li>
              <li>
                <Link href='/user/order'>Meus pedidos</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Sair</button>
              </li>
            </ul>
          </UserDash>
          {children}
        </UserMain>
      </UserPage>
    </Container>
  );
};

export default UserLayout;
