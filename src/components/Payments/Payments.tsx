import React from 'react';
import Input from '../Forms/Input';
import { PaymentsStyle } from './styles';
import Shipping from '../Shipping/Shipping';

const Payments = ({ open }) => {
  return (
    <Shipping title='Pagamentos'>
      {open.isPayments === true ? (
        <PaymentsStyle>
          <p>Numero para efetuar o pagamento (MPESA)</p>
          <Input placeholder='848984953' />
          <a href='https://'>Finalizar a compra</a>
        </PaymentsStyle>
      ) : (
        <p>Complete os passos anterior</p>
      )}
    </Shipping>
  );
};

export default Payments;
