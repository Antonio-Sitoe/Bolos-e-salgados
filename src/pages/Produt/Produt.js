import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultProduts from './pages/Default';
import SinglePage from './pages/SinglePage';
import Page404 from '../Page404/Page404';

function Produt() {
  return (
    <Routes>
      <Route path='' element={<DefaultProduts />} />
      <Route path=':id' element={<SinglePage />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
}

export default Produt;
