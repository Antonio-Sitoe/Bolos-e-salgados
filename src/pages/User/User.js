import React from 'react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import Page404 from '../Page404/Page404';
import { Container, Title } from '../../styles/styles';
import { UserContent, UserDash, UserIntro, UserMain, UserPage } from './styles';
import UserOrders from './UserOrders';
import UserAccount from './UserAccount';
import UserAccountEdit from './UserAccountEdit';
import UserAccountList from './UserAccountList';

const User = () => {
  const { isAuthenticate, user, UserLogout } = React.useContext(UserContext);

  const handleLogout = (e) => {
    e.preventDefault();
    UserLogout();
  };

  if (!isAuthenticate) {
    return <Navigate to='/login' />;
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
                <NavLink to='' end>
                  Dados
                </NavLink>
              </li>
              <li>
                <NavLink to='orders'>Meus pedidos</NavLink>
              </li>
              <li>
                <NavLink to='logout' onClick={handleLogout}>
                  Sair
                </NavLink>
              </li>
            </ul>
          </UserDash>
          <UserContent>
            <Routes>
              <Route path='' element={<UserAccount />}>
                <Route path='' element={<UserAccountList />} />
                <Route path='edit' element={<UserAccountEdit />} />
              </Route>
              <Route path='orders' element={<UserOrders />} />
              <Route path='*' element={<Page404 />} />
            </Routes>
          </UserContent>
        </UserMain>
      </UserPage>
    </Container>
  );
};

export default User;
