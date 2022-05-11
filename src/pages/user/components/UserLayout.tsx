import Link from "next/link"
import { Container, Title } from "../../../styles/styles"
import { UserDash, UserIntro, UserMain, UserPage } from "../styles"

const UserLayout = ({ children }) => {
  function handleLogout() { }
  const user = {
    username: 'Antonio sitoe'
  }

  return (
    <Container>
      <UserPage>
        <UserIntro>
          <Title>Bem vindo, {user.username} </Title>
        </UserIntro>
        <UserMain>
          <UserDash>
            <ul>
              <li>
                <Link href='/user'>
                  Dados
                </Link>
              </li>
              <li>
                <Link href='/user/order'>Meus pedidos</Link>
              </li>
              <li>
                <Link href='/login' >
                  <a onClick={handleLogout}>
                    Sair
                  </a>
                </Link>
              </li>
            </ul>
          </UserDash>
          {children}
        </UserMain>
      </UserPage>
    </Container>
  )
}

export default UserLayout

