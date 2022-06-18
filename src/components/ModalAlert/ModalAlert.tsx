import React from 'react';
import styled from 'styled-components';
import { animeLeft } from '../../pages/about/styles';
import { Title } from '../../styles/styles';
import { theme } from '../../styles/theme';

const ModalBackground = styled.div`
  padding: 0.6rem;

  background-color: rgba(0, 0, 0, 0.44);
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Modal = styled.div`
  /* margin: 0.6rem; */
  animation: ${animeLeft} 0.3s;
  width: 100%;
  max-width: 30rem;
  background: white;
  padding: 2rem;
  border-radius: 6px;

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 2rem 0 0 0;
    gap: 1rem;

    button {
      border: 0;
      padding: 0.8rem;
      cursor: pointer;
      border-radius: 6px;
    }
  }
`;

const LogoutButton = styled.button`
  background: #fee4e4;
  color: ${theme.colors.tomato};
  font-weight: 600;
`;
const ModalAlert = ({ title, modal, setModal, handleLogoutModal }) => {
  React.useEffect(() => {
    if (modal) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'initial';
  }, [modal]);
  if (modal)
    return (
      <ModalBackground>
        <Modal>
          <Title>{title}</Title>
          <div>
            <button onClick={() => setModal(false)}>Nao</button>
            <LogoutButton onClick={handleLogoutModal}>Sair</LogoutButton>
          </div>
        </Modal>
      </ModalBackground>
    );
  return <p></p>;
};

export default ModalAlert;
