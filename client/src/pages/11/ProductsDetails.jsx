// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

// const ProductDetails = () => {
//   const router = useRouter();
//   const { id } = router.query; 
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     if (id) {
//       // Fetching product details using the "id" parameter
//       const fetchProductDetails = async () => {
//         try {
//           const response = await fetch(`http://localhost:5000/product-details/${id}`);
//           const data = await response.json();
//           setProduct(data.product);
//         } catch (error) {
//           console.error('Error fetching product details:', error);
//         }
//       };

//       fetchProductDetails();
//     }
//   }, []);

//   return (
//     <div>
//       {product ? (
//         <div>
//           <h1>{product.productName}</h1>
//           <h2>{product.price}</h2>
        
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;
