import React from 'react';
import Link from 'next/link';
import { List } from '../styles';
import { Links } from '../../../styles/styles';

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
            <p>

              <strong>Nome do usuario:</strong> {user.username}
            </p>
          </li>
          <li>
            <p>

              <strong>Email:</strong> {user.email || '---'}
            </p>
          </li>
          <li>
            <p>
              <strong>Empresa (opcional):</strong> {user.empresa || '---'}
            </p>
          </li>
          <li>
            <p>
              <strong>Endereco :</strong> {user.endereco || '---'}
            </p>
          </li>
          <li>
            <p>
              <strong>Cidade e regiao:</strong> {user.cidade || '---'}
            </p>
          </li>
        </ul>
        <div>
          <Link href='user/edit'>
            <Links>
              Editar
            </Links>
          </Link>
        </div>
        {haveUserData && (
          <p>Certifique-se de preencher todos os dados de usuarios</p>
        )}
      </List>
    );
  return <p>Preencha teus dados</p>;
};

export default UserDataList;
