import React from 'react';
import './App.scss';
import Footer from './layout/Footer/Footer';
import Main from './layout/Main/Main';
import Header from './layout/Header/Header';
import Router from './routes/Router';

function App(): JSX.Element {
  return (
    <div className="App" >
      <Header />
      <Main />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
