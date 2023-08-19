
import React, { useState, useEffect } from 'react';


function ProductDetails() {

 // Fetching product details

//  TODO: Make dynamic routine for fetching product details
const [product, setProducts] = useState([])
const fetchProductDetails = async () => {
     const res = await fetch('http://localhost:5000/product-details/64d628c25618ef42bc171e9d')
     const { data } = await res.json()
     setProducts(data)
 }

 useEffect(() => {
     fetchProductDetails()
 }, [])
 
 return (
    <div>
      {product ? (
        <div>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
         
        </div>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
}




export default ProductDetails;
