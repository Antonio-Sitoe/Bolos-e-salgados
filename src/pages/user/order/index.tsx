import React from 'react';
import { Order, Subtitle } from '../styles';
import { UserContext } from '../../../Context/UserContext';
import Loading from '../../../components/Helper/Loading';
import UserLayout from '../../../components/Usercomponents/UserLayout';

const UserOrders = () => {
 const { isAuthenticate, loading } = React.useContext(UserContext);

  if (loading) return <Loading />;
  if (isAuthenticate)
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
