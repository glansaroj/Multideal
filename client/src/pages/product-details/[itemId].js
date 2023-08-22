
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProductDetails = () => {
  const router = useRouter();
  const { itemId } = router.query; 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (itemId) {
      // Fetching product details using the "itemId" parameter
      const fetchProductDetails = async () => {
        try {
          const response = await fetch(`http://localhost:5000/product-details/${itemId}`);
          const data = await response.json();
          setProduct(data.product);
        } catch (error) {
          console.error('Error fetching product details:', error);
        }
      };

      fetchProductDetails();
    }
  }, []);

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.productName}</h1>
          <h2>{product.price}</h2>
          <p> {product.description}</p>
          <p> {product.category}</p>

        
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetails;
