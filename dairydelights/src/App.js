import './App.css';
import {useState,useEffect} from 'react';
import Header from './components/Header';
import ProductView from './components/ProductView';
import Footer from './components/Footer';
import axios from 'axios';
import MenuBar from './components/MenuBar';
import applyFilters from './utils.js/FilterCard';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PageNotFound from './components/PageNotFound';
import Login from './components/Login';
import ProductDetail from './components/ProductDetail';
import Orders from './components/Orders';
function App() {

  const [value,setValue]=useState([]);
  const [filterCatergory,setfilterCatergory]=useState("")
  const [searchText,setSearchText]=useState("")  

  useEffect(()=>{
    try{
      async function fetchData(){
        const response=await axios.get("http://localhost:3000/products")
        setValue(response.data);
      }     
   fetchData();

    }catch(error){
      console.log("Fetching Error",Error)
    }
  
  },[]);
  const handleFilter=(e)=>{ setfilterCatergory(e.target.value) };
  const handleSearch=(e)=>{ setSearchText(e.target?.value ) };
  const handleClear=(e)=>{setSearchText("")}
let filteredData=applyFilters(value,filterCatergory,searchText)
  return (
  <BrowserRouter>
        <Header onSearchText={searchText} onSearch={handleSearch} onClearText={handleClear}/>
        <MenuBar onfilterValue={filterCatergory} onFilter={handleFilter}/>
<Routes>
  <Route     path="/"  element={ <ProductView data={filteredData} />} />
  <Route path="/details/:id" element={ <ProductDetail/>} />
  <Route path="/login" element={<Login/>}  />
  <Route path="/orders" element={<Orders />} />
  <Route path="/*" element={<PageNotFound />} />
</Routes> 
      <Footer/> 
  </BrowserRouter>
  );
}

export default App;
