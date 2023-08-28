
import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { PlusOutlined, } from '@ant-design/icons';
 import { Layout, Menu, Button, theme } from 'antd';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from "@/Redux/reducerSlice/users";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from 'react';


const Dashboard = () => {
  const [file, setFile] = useState(null)

  const handleAddProducts = (values) => {
    const data = new FormData()
    Object.entries(values).forEach((item) => {
      data.append(item[0], item[1])
    })
    data.append('product', file)

    fetch('http://localhost:5000/products',
      {
        method: 'POST',
        body: data
      })
  }

    const addProductAlert = () => {
        toast.success('Product added successfully')
      }
    
  return (
    <div>
        
        <h1 className='text-center text-2xl mb-2 font-bold text-slate-800'>Add new product</h1>


<div className='add-product flex items-center justify-center'>
  <Formik
    initialValues={{
      productName: '',
      category: '',
      price: '',
      quantity: '',
      description: ''
    }}
    onSubmit={values => {
      handleAddProducts(values)
      toast.success("Added new product successfully.")

    }}
  >




    {({ errors, touched }) => (

      // Custom 
      <Form className="h-[780px] w-[550px] bg-gray-200 bg-opacity-30 rounded-md shadow-md py-8 my-3 px-10 mb-20">



        <div className="fullName gap-1 flex flex-col ">
          <p className="mt-2  text-sm text-gray-400 text-left"> Product Name:</p>
          <Field
            className="w-full px-4 py-4  focus:border-yellow-500  rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
            name="productName"
            placeholder="Product Name"
          />
          {errors.productName && touched.productName ? (
            <div className="mt-1 text-xs text-red-400">
              {errors.productName}
            </div>
          ) : null}


          <p className="mt-5  text-sm text-gray-400 text-left"> Product categories:</p>
          <Field
            className="w-full   px-4 py-4  focus:border-yellow-500  rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
            name="category"
            placeholder="Product categories"
          />
          {errors.category && touched.category ? (
            <div>{errors.category}</div>
          ) : null}



          <p className="mt-5  text-sm text-gray-400 text-left"> Product Price:</p>
          <Field
            className="w-full   px-4 py-4  focus:border-yellow-500  rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
            name="price"
            type="number"
            placeholder="Product price"
          />
          {errors.price && touched.price ? (
            <div>{errors.price}</div>
          ) : null}


          <p className="mt-5  text-sm text-gray-400 text-left"> Product Quantity:</p>
          <Field
            className="w-full   px-4 py-4  focus:border-yellow-500  rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
            name="quantity"
            type="number"
            placeholder="Product Quantity"
          />
          {errors.quantity && touched.quantity ? (
            <div>{errors.quantity}</div>
          ) : null}


          <p className="mt-5  text-sm text-gray-400 text-left"> Product Description:</p>
          <Field
            className="w-full   px-4 py-4  focus:border-yellow-500  rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
            name="description"
            placeholder="Product Description"
          />
          {errors.description && touched.description ? (
            <div>{errors.description}</div>
          ) : null}










          <p className="mt-5  text-sm text-gray-400 text-left"> Product Image :</p>

          {/* <input type="file" onChange={(e) => setFile(e.target.files[0])} /> */}
          <Field
            className=" px-4 py-4 mt-1 focus:border-yellow-500  rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
            name="image"
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            placeholder="Upload your Shop Image"
          />

          <button
            className="mt-10   text-md font-semibold bg-slate-800 text-white w-full py-5 rounded-lg hover:bg-yellow-500  transition-all duration-500 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
            type="submit"
            onClick={addProductAlert}
          >
            <PlusOutlined className='ml-2 text-md   text-white text-semibold' />
            <span className='ml-2'>
              Add Product


            </span>


          </button>
          <ToastContainer
            position="top-center"

            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      </Form>
    )}
  </Formik>
</div>
      
    </div>
  )
}

export default Dashboard
