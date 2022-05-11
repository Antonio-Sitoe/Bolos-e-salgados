import { Subtitle, UserContent } from './styles';
import { Container } from '../../styles/styles';
import UserLayout from './components/UserLayout';
import UserDataList from './components/UserDataList';

const User = () => {
  return (
    <Container>
      <UserLayout>
        <UserContent>
          <Subtitle>Dados pessoas</Subtitle>
          <UserDataList />
        </UserContent>
      </UserLayout>
    </Container>
  );
};

export default User;
