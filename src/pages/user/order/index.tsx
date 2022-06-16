import React from 'react';
import { Order, Subtitle } from '../styles';
import { UserContext } from '../../../Context/UserContext';
import Loading from '../../../components/Helper/Loading';
import UserLayout from '../../../components/Usercomponents/UserLayout';
import { GetServerSideProps } from 'next';
import nookies from 'nookies';



const UserOrders = () => {
  const { user, isAuthenticate } = React.useContext(UserContext);
  if (isAuthenticate === false) return <Loading />;
  if (user)
    return (
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
    );
  return null;
};

export default UserOrders;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { token } = nookies.get(ctx);

  if (!token || token === undefined || token === null) {
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

