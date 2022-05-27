import React, {useState,useEffect} from "react";
import axios from 'axios';
import '../index.css';
import Header from "./Header";
import Footer from "./Footer";
import '../App.css';
import Pagination from './Pagination';
import Item from './Item';

function App() {
  const [loading, setLoading] =useState(false);
  const [currentPage, setCurrentPage] =useState(1);
  const [items, setItems] =useState([]);
  const [itemOnPage] =useState(4);

useEffect(() =>{
  const getItems = async () =>{
    setLoading(true)
    const res = await axios.get('https://api.unsplash.com/photos/')
    console.log(res.data)
    /*запускаем*/
  /*  setItems(res.data)
    setLoading(false)*/
  }
  getItems()
},[])

  return (
      <>
        <div className="App"> </div>
     {/*   <Header/>
        <Footer/>*/}
      </>
  );
}

export default App;
