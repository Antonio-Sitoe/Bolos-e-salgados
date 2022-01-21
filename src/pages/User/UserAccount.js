import { Outlet } from 'react-router-dom';
import { Subtitle } from './styles';
const UserAccount = () => (
  <>
  <Subtitle>Dados pessoas</Subtitle>
    <Outlet />
  </>
);
export default UserAccount;
