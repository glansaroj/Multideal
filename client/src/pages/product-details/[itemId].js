
import Header from '@/components/Header/Header';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  StarFilled,
  ShoppingCartOutlined,
  HeartOutlined,
  TwitterOutlined, InstagramFilled,
  FacebookFilled, YoutubeFilled,


} from "@ant-design/icons";
import Footer from '@/components/Footer/Footer';

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
    <div >
      <Header />
      {product ? (
        <>
          <div className='flex  w-full gap-10 py-10 px-12  mt-10 h-full'>
            <div className='bg-gray-200 flex items-center w-[1300px] h-[500px]'>
              <Image
                src={'http://localhost:5000/product-img/' + itemId}
                alt=""
                width={1200}
                height={1200}
                srcset=""
                className="-pt-5   transition duration-300 ease-in-out cursor-pointer"

              />

            </div>

            <div className='flex flex-col items-start w-full px-5'>
              <button className='border-yellow-500 border px-5  py-1.5 text-yellow-500 font-semibold'> {product.quantity} in Stock</button>
              <h1 className='text-5xl font-semibold mt-4 text-slate-800'>{product.productName}</h1>
              <p className='mt-4 text-md text-gray-500'> {product.description}</p>
              <p className='mt-3 font-bold text-slate-800 text-3xl'> <span className='text-slate-500 font-normal line-through text-lg'>Rs.4500</span> Rs.{product.price}</p>

              <div className='mt-6 px-5 py-1 text-xl w-[160px] flex items-center text-center justify-between gap-4 font-semibold border '> <button className=' text-center hover:text-yellow-500 mr-2 text-2xl'>-</button> <span className='border-l border-r px-5'> 1</span> <button className=' hover:text-yellow-500 text-center'>+</button> </div>



              {/* Add to Cart & wishList */}
              <div className='flex mt-4 items-start justify-beetween gap-3'>
                <div className="flex  justify-center items-start gap-2  ">
                  <button className="btn shadow bg-slate-800 hover:outline hover:bg-yellow-500 hover:outline-yellow-500 hover:outline-1 text-xl transition duration-500  flex  gap-2 justify-center items-center ease-out text-white w-[250px] h-[60px] ">
                    {" "}
                    <ShoppingCartOutlined classID="add " />  Add to cart
                  </button>
                </div>

                <div className='hover:border-yellow-500 cursor-pointer h-[60px] shadow px-5 flex items-center text-2xl text-white bg-yellow-500'>
                  <HeartOutlined className='hover:scale-125' />
                </div>
              </div>

              <hr className='mt-12 bg-gray-400 h-[1px] w-full' />

              <div className='mt-5'>
                <p className='text-base font-semibold  text-slate-800'>Product ID: <span className='text-sm ml-1 text-gray-500 '>{product._id}</span></p>
                <p className='text-md font-semibold mt-0.5 text-slate-800'>Category: <span className='text-sm ml-1 text-gray-500 '>{product.category}</span></p>

                <div className=''>
                  <div> <p className='text-md font-semibold mt-3 text-slate-800'>Share:  </p>
                  </div>


                  <div className='flex items-center mt-2 gap-3'>
                    <div class="cursor-pointer  transition duration-200 ease-in-out shadow-md flex justify-center items-center"><TwitterOutlined /></div>
                    <div class=" cursor-pointer  transition duration-200 ease-in-out   shadow-sm  flex justify-center items-center"><InstagramFilled /></div>
                    <div class=" cursor-pointer  transition duration-200 ease-in-out  shadow-md  flex justify-center items-center"><FacebookFilled /></div>
                  </div>

                </div>




              </div>




              {/* <p> {product.category}</p> */}
            </div>

          </div>

          <div className='w-full mt-16 px-12'>
            <button className='text-lg font-semibold  text-slate-800'>Product Overview</button>
            <button className='ml-5 text-lg font-semibold  text-slate-800'>Review & Feedback</button>
            <hr className='w-full mt-2.5  bg-gray-500 h-[2px] ' />
            <p className='mt-4 text-md text-gray-500'> The Alchemist (Portuguese: O Alquimista) is a novel by Brazilian author Paulo Coelho which was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller.[1][2] An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.</p>

            <p className='mt-4 text-md text-gray-500'>
              <span className='text-base font-semibold  text-slate-800'>From the Back Cover</span> <br />
              "My heart is afraid that it will have to suffer," the boy told the alchemist one night as they looked up at the moonless sky." Tell your heart that the fear of suffering is worse than the suffering itself. And that no heart has ever suffered when it goes in search of its dreams." <br/> <br />

              Every few decades a book is published that changes the lives of its readers forever. The Alchemist is such a book. With over a million and a half copies sold around the world, The Alchemist has already established itself as a modern classic, universally admired. Paulo Coelho's charming fable, now available in English for the first time, will enchant and inspire an even wider audience of readers for generations to come.

              The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found. From his home in Spain he journeys to the markets of Tangiers and across the Egyptian desert to a fateful encounter with the alchemist.

              The story of the treasures Santiago finds along the way teaches us, as only a few stories have done, about the essential wisdom of listening to our hearts, learning to read the omens strewn along life's path, and, above all, following our dreams.
            </p>


          </div>




        </>
      ) : (
        <p>Loading...</p>
      )
      }
      <Footer />
    </div >
  );
};

export default ProductDetails;
