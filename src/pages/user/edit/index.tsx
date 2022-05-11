import React from 'react';
import Button from '../../../components/Forms/Button';
import Input, { Label } from '../../../components/Forms/Input';
import useForm from '../../../hooks/useForm';

import { USERDATA_UPDATE } from '../../../services/Api';
import ErrorServer from '../../../components/Helper/ErrorServer';
import useFecth from '../../../hooks/useFecth';
import { LoginGet } from '../../login/styles';
import UserLayout from '../components/UserLayout';

const UserAccountEdit = () => {
  const user = {
    id: '1',
    username: 'antonio Sitoe',
    email: 'antoniositoehl@gmail.com',
    empresa: 'Polana construcoes',
    endereco: 'Fernao magalhaies',
    cidade: 'Maputo cidade'
  }
  const { request, loading, error } = useFecth();

  const nome = useForm('name', user.username);
  const email = useForm('email', user.email);
  const empresa = useForm(false, user.empresa);
  const endereco = useForm('name', user.endereco);
  const cidade = useForm('name', user.cidade);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      nome.validate() &&
      email.validate() &&
      endereco.validate() &&
      cidade.validate()
    ) {
      const token = window.localStorage.getItem('token');

      const { url, options } = USERDATA_UPDATE(user.id, token, {
        cidade: cidade.value,
        email: email.value,
        empresa: empresa.value || '',
        endereco: endereco.value,
        username: nome.value,
      });
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  };
  return (
    <UserLayout>
      <LoginGet onSubmit={handleSubmit}>
        <Input
          label='Nome'
          placeholder='Digite o seu nome'
          type='text'
          name='nome'
          {...nome}
        />
        <Input
          label='Email'
          placeholder='Digite o seu email'
          type='email'
          name='email'
          {...email}
        />
        <Input
          label='Empresa / Organizacao (opcional)'
          placeholder='Digite a sua empresa'
          type='text'
          name='empresa'
          {...empresa}
        />
        <Input
          label='Endereco'
          placeholder='Digite a sua empresa'
          type='text'
          name='endereco'
          {...endereco}
        />


        <Label>Cidade</Label>
        <select
          name='cidade'
          id='cidade'
          value={cidade.value}
          onChange={cidade.onChange}
        >
          <option disabled>Selecione a cidade</option>
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

        {loading ? (
          <Button loading={loading}>...Carregando</Button>
        ) : (
          <Button>Gravar</Button>
        )}

        <ErrorServer error={error} />
      </LoginGet>
    </UserLayout>
  );
};

export default UserAccountEdit;
