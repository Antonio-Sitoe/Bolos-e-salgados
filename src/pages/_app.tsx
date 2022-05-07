import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/styles'
import { theme } from '../styles/theme'
import Footer from '../components/Footer/Footer'
import Social from '../components/Social/Social'
import Header from '../components/Header/Header'



export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Header/>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <Social />
        <Footer />
      </ThemeProvider>
    </>
  )
}