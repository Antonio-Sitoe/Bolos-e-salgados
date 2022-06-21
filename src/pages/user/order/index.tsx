import React from 'react';
import { Order, Subtitle } from '../styles';
import { UserContext } from '../../../Context/UserContext';
import Loading from '../../../Helper/Loading';
import UserLayout from '../../../components/Usercomponents/UserLayout';
import Head from 'next/head';

const UserOrders = () => {
  const { isAuthenticate, loading, user } = React.useContext(UserContext);

  if (loading) return <Loading />;
  if (isAuthenticate)
    return (
      <>
        <Head>
          <title>Pedidos de {user.username}</title>
          <meta name='description' content='Minha conta' />
        </Head>
        <UserLayout>
          <Order>
            <Subtitle>Pedidos recentes</Subtitle>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Pedido</th>
                    <th>Data</th>
                    <th>Status</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#11486</td>
                    <td>$ 26/11/2021 </td>
                    <td>$Cancelado</td>
                    <td>$R$384,00 de 1 item</td>
                  </tr>
                  <tr>
                    <td>#11486</td>
                    <td> 26/11/2021 </td>
                    <td>$Cancelado</td>
                    <td>$R$384,00 de 1 item</td>
                  </tr>
                  <tr>
                    <td>#11486</td>
                    <td>$ 26/11/2021 </td>
                    <td>$Cancelado</td>
                    <td>$R$384,00 de 1 item</td>
                  </tr>

                  <tr>
                    <td>#11486</td>
                    <td> 26/11/2021 </td>
                    <td>$Cancelado</td>
                    <td>$R$384,00 de 1 item</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Order>
        </UserLayout>
      </>
    );
  return null;
};

export default UserOrders;
