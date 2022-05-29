import Footer from '../components/Footer/Footer'
import Social from '../components/Social/Social'
import Header from '../components/Header/Header'
import { theme } from '../styles/theme'
import { UserStorage } from '../Context/UserContext'
import { CartStorage } from '../Context/CartContext'
import { GlobalStyles } from '../styles/styles'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <UserStorage>
            <CartStorage>
                <GlobalStyles />
                <Header />
                <Component {...pageProps} />
                <Social />
                <Footer />
              <ToastContainer />
            </CartStorage>
        </UserStorage>
      </ThemeProvider>
    </>
  )
}