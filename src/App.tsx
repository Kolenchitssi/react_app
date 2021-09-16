import React from 'react';
import './App.scss';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import MyRouter from './routes/Router';

function App(): JSX.Element {
  return (
    <div className="App" >
      <Header />      
      <MyRouter />
      <Footer />
    </div>
  );
}

export default App;
