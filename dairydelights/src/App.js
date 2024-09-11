import './App.css';
import {useState,useEffect} from 'react';
import Header from './components/Header';
import ProductView from './components/ProductView';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header  />
      <ProductView />
      <Footer/>
    </div>
  );
}

export default App;
