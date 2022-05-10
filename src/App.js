import React from 'react';
import { GlobalStyles } from './styles/styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserStorage } from './Context/UserContext';
import { CartStorage } from './Context/CartContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Social from './components/Social/Social';
import Footer from './components/Footer/Footer';
import Page404 from './pages/Page404/Page404';
import Produt from './pages/Produt/Produt';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import Faq from './pages/Faq/Faq';
import User from './pages/User/User';
import { GlobalFuntions } from './Context/GlobalFuntions';


import Checkout from './pages/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <GlobalFuntions>
          <CartStorage>
            <Header />
            <Routes>
              <Route path='' element={<Home />} />
              <Route path='product/*' element={<Produt />} />
              <Route path='about' element={<About />} />
              <Route path='contact' element={<Contact />} />
              <Route path='login/*' element={<Login />} />
              <Route path='faq' element={<Faq />} />
              <Route path='cart' element={<Cart />} />
              <Route path='checkout' element={<Checkout />} />
              <Route path='acount/*' element={<User />} />
              <Route path='*' element={<Page404 />} />
            </Routes>
            <Social />
            <Footer />
            <GlobalStyles />
            <ToastContainer />
          </CartStorage>
        </GlobalFuntions>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;