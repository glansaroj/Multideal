import React, { useState, useEffect } from "react";
import { AutoComplete } from "antd";

const options = [
  { value: "Burns Bay Road" },
  { value: "Downing Street" },
  { value: "Wall Street" },
];

const Search = () => {
  const [searchedResult, setSearchedResult] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

    const fetchProductsDetails = async (page = 1, size = 10) => {
    const res = await fetch(`http://localhost:5000/products?page=${page}&size=${size}`)
    const data = await res.json()
    setProducts(data.productList)
    setTotalCount(data.count)
}


const searchProducts = async(searchText) => {
  const res = await fetch(`http://localhost:5000/products?searchText=${searchText}`)
  const data = await res.json()
  if(data){
     const searchList=  data.productsList.map((item)=>{
          return {value: item.productName}
      })
      setSearchedResult(searchList)
  }
  
}
useEffect(() => {
  fetchProductsDetails()
}, [])


  return (
    <div>
      {/* <input className="w-96 bg-white py-2.5 px-10 focus:outline-none "
          placeholder="I'm Shopping for "
          title='Search bar'
        />   */}
      <AutoComplete
        style={{
          width: 500,
        }}
        
      
        onChange={searchProducts}
        options={searchedResult}
        placeholder="I'm Shopping for ..."
        filterOption={(inputValue, option) =>
          option?.value?.toUpperCase()?.indexOf(inputValue?.toUpperCase()) !==
          -1
        }
      />

      {/* <button className="bg-yellow-500 py-2.5 px-7 text-slate-800  font-semibold focus:ring-none  ">Search</button> */}
      {/* <input type="search"> </input> */}
    </div>
  );
};

export default Search;
