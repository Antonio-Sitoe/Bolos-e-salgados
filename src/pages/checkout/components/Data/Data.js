import React from 'react';
import Button from '../../../../components/Forms/Button';
import Input, { Label } from '../../../../components/Forms/Input';
import { ButtonEdit, DataStyle } from '../../styles';
import Shipping from '../Shipping/Shipping';
import useForm from '../../../../hooks/useForm';
import useFecth from '../../../../hooks/useFecth';
import ErrorServer from '../../../../Helper/ErrorServer';
import { USERDATA_UPDATE } from '../../../../services/Api';

const Data = ({ user, open, setOpen, cart, total }) => {
  const { request, loading, error } = useFecth();
  const nome = useForm('name', user.username);
  const empresa = useForm(false, user.empresa);
  const endereco = useForm('name', user.endereco);
  const referencia = useForm('name', user.referencia);
  const pais = useForm('name', user.pais);
  const cidade = useForm('name', user.cidade);
  const observer = React.useRef();

  function setCartToServer() {
    console.log(cart, total);
  }
  console.log(user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      nome.validate() &&
      endereco.validate() &&
      referencia.validate() &&
      pais.validate() &&
      cidade.validate()
    ) {
      const token = window.localStorage.getItem('token');

      const { url, options } = USERDATA_UPDATE(user.id, token, {
        cidade: cidade.value,
        email: user.email,
        empresa: empresa.value || '',
        endereco: endereco.value,
        pais: pais.value,
        referencia: referencia.value,
        username: user.username,
      });
      const { response, json } = await request(url, options);
      console.log(json);
      if (response.ok) {
        setOpen((anterior) => {
          return { ...anterior, isPayments: true, isData: false };
        });
      }
      setCartToServer();
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
              <p>Endereco: {user.endereco}</p>
              <p>Local de Referencia: {user.referencia}</p>
              <p>Observacao: {observer.current.value}</p>
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
          <Input
            label='Atualizar o nome'
            type='text'
            placeholder='Digite o seu Nome'
            name='nome'
            id='nome'
            {...nome}
          />
          <Input
            label='Empresa / Organizacao'
            type='text'
            placeholder='O nome da empresa e opcional'
            name='empresa'
            id='empresa'
            {...empresa}
          />
          <Input
            label='Endereco'
            type='text'
            placeholder='Digite o seu Endereco'
            name='Endereco'
            id='Endereco'
            {...endereco}
          />
          <Input
            label='Ponto de referencia'
            type='text'
            placeholder='Digite onde quer receber o produto'
            name='referencia'
            id='referencia'
            {...referencia}
          />
          <Label>Selecione o pais</Label>
          <select
            name='pais'
            id='pais'
            value={pais.value}
            onChange={pais.onChange}
          >
            <option value='' disabled>
              Selecione o pais
            </option>
            <option value='mocambique'>Mocambique</option>
          </select>
          <ErrorServer error={pais.error} />

          <Label>Cidade</Label>
          <select
            name='cidade'
            id='cidade'
            value={cidade.value}
            onChange={cidade.onChange}
          >
            <option value='' disabled>
              Selecione a cidade
            </option>
            <option value='Matola'>Matola</option>
            <option value='Maputo cidade'>Maputo cidade</option>
            <option value='Boane'>Boane</option>
            <option value='Magude'>Magude</option>
            <option value='Manhiça'>Manhiça</option>
            <option value='Marracuene'>Marracuene</option>
            <option value='Matutuíne'>Matutuíne</option>
            <option value='Moamba'>Moamba</option>
            <option value='Namaacha'>Namaacha</option>
          </select>
          <ErrorServer error={cidade.error} />
          <textarea
            name='observer'
            id='obsver'
            cols='30'
            placeholder='Alguma obervacao antes de efetuar a compra ?'
            rows='10'
            ref={observer}
          ></textarea>
          <Button loading={loading}>Atualizar</Button>
          <ErrorServer error={error} />
        </DataStyle>
      )}
    </Shipping>
  );
};

export default Data;
