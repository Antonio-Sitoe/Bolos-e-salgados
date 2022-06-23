import React from 'react';
import Button from '../../../../components/Forms/Button';
import { ButtonEdit, DataStyle } from '../../styles';
import Shipping from '../Shipping/Shipping';

import Textearea from '../../../../components/Forms/Textearea';
import ErrorServer from '../../../../Helper/ErrorServer';

const Data = ({ user, open, setOpen, message }) => {
  const [showError, setShowError] = React.useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.value) {
      setOpen((anterior) => {
        return { ...anterior, isPayments: true, isData: false };
      });
      setShowError('');
    } else {
      setShowError('Digite qualquer coisa');
    }
  };

  return (
    <Shipping title='Dados Pessoais'>
      {!open.isData === true ? (
        <>
          {!open.isPayments ? (
            <p>Prencha os dados da conta</p>
          ) : (
            <>
              <p>
                <strong>Endereco</strong> {user.endereco}
              </p>
              <p>
                <strong>Empresa</strong> {user.empresa}
              </p>
              <p>
                <strong>Messagem</strong> {message.value}
              </p>
              <ButtonEdit
                onClick={() => {
                  setOpen((anterior) => {
                    return { ...anterior, isData: true };
                  });
                }}
              >
                Editar
              </ButtonEdit>
            </>
          )}
        </>
      ) : (
        <DataStyle onSubmit={handleSubmit}>
          <Textearea
            name='observer'
            id='obsver'
            error={message.error}
            onChange={message.onChange}
            value={message.value}
          />
          <Button>Atualizar</Button>
          <ErrorServer error={showError} />
        </DataStyle>
      )}
    </Shipping>
  );
};

export default Data;
