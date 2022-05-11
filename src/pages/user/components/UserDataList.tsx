import React from 'react';
import Link from 'next/link';
import { List } from '../styles';

const UserDataList = () => {
  const [haveUserData, setUserData] = React.useState(false)
  const user = {
    username: 'antonio Sitoe',
    email: 'antoniositoehl@gmail.com',
    empresa: 'Polana construcoes',
    endereco: 'Fernao magalhaies',
    cidade: 'Maputo cidade'
  }

  if (user)
    return (
      <List>
        <ul>
          <li>
            <strong>Nome do usuario:</strong> {user.username}
          </li>
          <li>
            <strong>Email:</strong> {user.email || '---'}
          </li>
          <li>
            <strong>Empresa (opcional):</strong> {user.empresa || '---'}
          </li>
          <li>
            <strong>Endereco :</strong> {user.endereco || '---'}
          </li>
          <li>
            <strong>Cidade e regiao:</strong> {user.cidade || '---'}
          </li>
        </ul>
        <div>
          <Link href='user/edit'>Editar</Link>
        </div>
        {haveUserData && (
          <p>Certifique-se de preencher todos os dados de usuarios</p>
        )}
      </List>
    );
  return <p>Preencha teus dados</p>;
};

export default UserDataList;
