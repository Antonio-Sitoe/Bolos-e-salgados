import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/styles'
import { theme } from '../styles/theme'
import Footer from '../components/Footer/Footer'
import Social from '../components/Social/Social'
import Header from '../components/Header/Header'
import { UserStorage } from '../Context/UserContext'
import { CartStorage } from '../Context/CartContext'
import { GlobalFuntions } from '../Context/GlobalFuntions'



export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <UserStorage>
          <CartStorage>
            <GlobalFuntions>
              <GlobalStyles />
              <Header />
              <Component {...pageProps} />
              <Social />
              <Footer />
            </GlobalFuntions>
          </CartStorage>
        </UserStorage>
      </ThemeProvider>
    </>
  )
}