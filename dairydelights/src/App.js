import './App.css';
import {useState,useEffect} from 'react';
import Header from './components/Header';
import ProductView from './components/ProductView';
import Footer from './components/Footer';
import axios from 'axios';
import MenuBar from './components/MenuBar';
import applyFilters from './utils.js/FilterCard';
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
    <div className="App">
      <Header onSearchText={searchText} onSearch={handleSearch} onClearText={handleClear}/>
{/* <input onChange={handleSearch} type="text" /> */}
      <MenuBar onfilterValue={filterCatergory} onFilter={handleFilter}/>
      <ProductView data={filteredData} />
      <Footer/>
    </div>
  );
}

export default App;
