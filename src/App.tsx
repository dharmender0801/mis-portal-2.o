import React from 'react';
import logo from './logo.svg';
import './App.css';
import Table from './Component/Table';
import DefaultLayout from './Initial/DefaultLayout';
import NavBar from './Top-Nav/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Table />
      <DefaultLayout />
    </div>
  );
}

export default App;
