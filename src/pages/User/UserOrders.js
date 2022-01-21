import React from 'react';
import { Order, Subtitle } from './styles';
// import { UserContext } from '../../Context/UserContext';
// import { Link } from 'react-router-dom';
// import { BsVectorPen } from 'react-icons/bs';

const UserOrders = () => {
  // const { user } = React.useContext(UserContext);

  return (
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
  );
};

export default UserOrders;
