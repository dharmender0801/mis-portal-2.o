import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Component/Table';
import DefaultLayout from './Initial/DefaultLayout';
import NavBar from './Top-Nav/NavBar';
import { Routes, Route } from 'react-router-dom';
import Error from './Component/Error';

function App() {
  return (

    <Routes key={"1"}>
      <Route key={'public-routs'} path="/" element={<DefaultLayout />} >
        <Route key={'pt-r-1'} path="*" element={< Error />} />
        <Route key={'pt-r-2'} path="/:countyname/:data" element={< Table />} />


      </Route>
    </Routes>

  );
}

export default App;
