import React from 'react';
import Shipping from '../Shipping/Shipping';
import { EmailStyle } from '../../styles';
import EmailLogin from './EmailLogin';

const Email = ({ setOpen, isAuthenticate, user }) => {
  React.useEffect(() => {
    if (isAuthenticate === true) {
      setOpen((anterior) => {
        return { ...anterior, isData: true };
      });
    }
  }, [isAuthenticate, setOpen]);
  return (
    <Shipping title='Dados do cliente'>
      {isAuthenticate ? (
        <EmailStyle>
          <p>Nome: {user.username}</p>
          <p>Email: {user.email}</p>
        </EmailStyle>
      ) : (
        <EmailLogin setOpen={setOpen} />
      )}
    </Shipping>
  );
};

export default Email;
