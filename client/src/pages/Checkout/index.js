import React from 'react'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from 'react';
import Link from 'next/link';
import { CreditCardFilled, BankFilled, SafetyCertificateFilled, CloseOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, Space } from 'antd';
import Image from 'next/image';
import { useRouter } from 'next/router';











const Checkout = () => {
    const router = useRouter();
    const shopListingSchema = Yup.object().shape({
        FullName: Yup.string().required("Full Name is a required field"),

        email: Yup.string()
            // Format Validation
            .email("Invalid email address")
            // Required Field Validation
            .required("Email is a required field")

            .min(5, "Must be more than 8 characters"),

        // Error messages
        // .matches('@', "Must include @ !"),

        password: Yup.string()
            .required("Password is a required field")
            // check minimum characters
            .min(8, "Password must have at least 8 characters")
            // Error messages for requirements
            .matches(/[0-9]/, "Must include a digit!"),
    });


    const { cartList } = useSelector((state) => state.products);
    let cartTotal = cartList.reduce((acc, item) => acc + item.price, 0);



    // Handle varification
    const handleSubmit = async (values) => {
        console.log(files);
    };

    const redirectToHome = () => {
        router.push('/');
        alert('Home')
    }

    const orderMade = () => {
        Modal.success({
            title: 'Congratulatins! Your order has been placed successfully.',
            content: (
                <div className='  items-center justify-center text-md text-slate-800 font-semibold'>
                    <Image src={'/order1.png'} width={400} height={400} />
                    <p>Your order is on the way for Delivery.</p>
                    <p>Thank Your for shopping with MultiDeal.</p>
                </div>
            ),
            onOk() { router.push('/')},
        });
    };



    return (
        <>
            <div className='w-full h-full '>
                <Header />
                <h1 className='text-4xl font-bold text-slate-800 text-center mt-10 mb-7'> Checkout Information</h1>

                <div className='w-full flex justify-between  items-start gap-5 px-12'>
                    <div>
                        <h1 className='text-2xl font-semibold text-slate-800'> Billling Details </h1>

                        <div className="container  bg-gray-100 text-gray-900 flex flex-row min-h-screen  w-full justify-center items-center">
                            <Formik
                                initialValues={{
                                    firstName: "",
                                    lastName: "",
                                    phoneNumber: "",
                                    password: "",
                                    confirmPassword: "",
                                    address: "",
                                    shopName: "",
                                    shopAddress: "",
                                    logo: "",

                                }}
                                validationSchema={shopListingSchema}
                                onSubmit={(values) => {
                                    // same shape as initial values
                                    console.log(values);
                                }}
                            >
                                {({ errors, touched }) => (
                                    <Form className="h-5/6 w-[650px] bg-gray-200 bg-opacity-30 border-2 rounded-md shadow-md py-10 my-3 px-7 mb-20">
                                        {/* <label for="firstName">First Name*</label> */}

                                        {/* SELLER INFO HERE */}
                                        <h1 className="text-md text-slate-800 -mt-2 font-semibold">
                                            Contract Information:
                                        </h1>
                                        {/* <hr className="mt-2 bg-slate-900 " /> */}



                                        <div className="flex flex-col">
                                            <div className="fullName gap-7 flex flex-row items-center">
                                                <Field
                                                    className="w-full placeholder:text-gray-400  px-8 py-4 mt-4 focus:border-yellow-500  rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
                                                    name="FirstName"
                                                    placeholder="Full Name"
                                                />
                                                {errors.FullName && touched.FullName ? (
                                                    <div className="mt-1 text-xs text-red-400">
                                                        {errors.FullName}
                                                    </div>
                                                ) : null}


                                            </div>

                                            <div className="emailPhonenumber gap-6 mt-3 flex flex-row">
                                                <Field
                                                    className="w-full px-8 placeholder:text-gray-400  py-4 mt-1 focus:border-yellow-500  rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
                                                    name="email"
                                                    placeholder="Email"
                                                />
                                                {errors.email && touched.email ? (
                                                    <div className="mt-1 text-xs text-red-400">
                                                        {errors.email}
                                                    </div>
                                                ) : null}

                                                <Field
                                                    className="w-full px-8  placeholder:text-gray-400  py-4 mt-1 focus:border-yellow-500  rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
                                                    name="phoneNumber"
                                                    placeholder="Phone Number"
                                                />
                                                {errors.email && touched.email ? (
                                                    <div className="mt-1 text-xs text-red-400">
                                                        {errors.email}
                                                    </div>
                                                ) : null}
                                            </div>
                                        </div>




                                        {/* SHOP INFO HERE */}

                                        {/* <hr className="mt-10 bg-slate-900 " /> */}

                                        <h1 className="text-md text-slate-800 mt-10 font-semibold">
                                            Shipping Address:
                                        </h1>
                                        {/* <hr className="mt-2 bg-slate-900 " /> */}



                                        <Field
                                            className="w-full placeholder:text-gray-400 px-8 py-4 mt-4 focus:border-yellow-500  rounded-lg font-normal  bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
                                            name="shopName"
                                            placeholder="Street Address"
                                        />
                                        {errors.FullName && touched.FullName ? (
                                            <div className="mt-1 text-xs text-red-400">
                                                {errors.FullName}
                                            </div>
                                        ) : null}


                                        <div className="passwordConfirm gap-6 mt-3 flex flex-row">
                                            <Field
                                                className="w-full px-8 placeholder:text-gray-400  py-4 mt-1 focus:border-yellow-500  rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
                                                name="email"
                                                placeholder="City / State"
                                            />
                                            {errors.email && touched.email ? (
                                                <div className="mt-1 text-xs text-red-400">
                                                    {errors.email}
                                                </div>
                                            ) : null}

                                            <Field
                                                className="w-full px-8  placeholder:text-gray-400  py-4 mt-1 focus:border-yellow-500  rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
                                                name="phoneNumber"
                                                placeholder="Postal Code"
                                            />
                                            {errors.email && touched.email ? (
                                                <div className="mt-1 text-xs text-red-400">
                                                    {errors.email}
                                                </div>
                                            ) : null}
                                        </div>


                                        <textarea
                                            className="w-full px-8 py-4 mt-3 placeholder:text-gray-400  focus:border-yellow-500  rounded-lg font-normal bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
                                            name="phoneNumber"
                                            type='text area'
                                            cols="20" rows="5"
                                            placeholder="Order Note eg. Special notes for Delivery">
                                        </textarea>
                                        {errors.email && touched.email ? (
                                            <div className="mt-1 text-xs text-red-400">
                                                {errors.email}
                                            </div>
                                        ) : null}


                                        <h1 className="text-md text-slate-800 mt-10 font-semibold">
                                            Select Payment Method:
                                        </h1>
                                        <div className="passwordConfirm gap-6 mt-3 flex justify-between ">
                                            <div className='border gap-1 flex justify-between items-center px-4 py-1.5'> <CreditCardFilled /> Credit Card <span> <input type='radio'></input> </span> </div>
                                            <div className='border gap-1 flex justify-between items-center px-4 py-1.5'> <BankFilled /> Bank Transfer <span> <input type='radio'></input> </span></div>
                                            <div className='border gap-1 flex justify-between items-center px-4 py-1.5'> <SafetyCertificateFilled /> Cash on Delivery <span> <input type='radio'></input> </span></div>


                                        </div>







                                    </Form>
                                )}
                            </Formik>
                        </div>



                    </div>



                    {/* ORDER SUMMERY */}
                    <div>
                        {/* <h1 className='text-2xl font-semibold text-slate-800'> Your Order </h1> */}
                        <div className=' border-2 shadow-lg mt-12 px-6 rounded w-[500px] h-[] my-3 pb-8 mr-0'>

                            <div className='border-b py-3'>
                                <h1 className='text-2xl font-bold  text-slate-800'> Your Order </h1>
                            </div>

                            <div className='flex mt-3  text-lg  font-semibold text-slate-800 justify-between'>
                                <div className='border-r '>
                                    Products
                                </div>

                                <div >
                                    Price
                                </div>
                            </div>





                            {cartList.map((item) => {

                                return (<div className='flex mt-2 text-sm text-slate-500 py-1  justify-between'>
                                    <div className='flex items-center justify-between'>
                                        ◈ {item.title} * 1
                                    </div>

                                    <div>
                                        Rs. {item.price}
                                    </div>
                                </div>

                                )
                            })}



                            <div className='flex flex-col gap-2 mt-6  border-t border-b py-4 text-sm font-semibold text-slate-800 justify-between'>
                                <div className='flex justify-between '>
                                    <div>
                                        Cart total
                                    </div>

                                    <div >
                                        Rs. {cartTotal}
                                    </div>
                                </div>

                                <div className='flex  justify-between '>
                                    <div>
                                        Delivery Charge
                                    </div>

                                    <div >
                                        Rs. 250
                                    </div>
                                </div>




                            </div>

                            {/* TOTAL */}
                            <div className='text-yellow-500 text-xl font-semibold flex justify-between mt-3 '>
                                <div>
                                    Grand Total
                                </div>

                                <div >
                                    Rs. {cartTotal + 250}
                                </div>
                            </div>







                            <button onClick={orderMade} className='bg-slate-800 w-full mt-12 rounded py-4 transition duration-500 ease-in-out hover:bg-yellow-500 font-semibold text-white '> Place Order</button>


                        </div>
                    </div>
                </div>
            </div>


            <Footer />


        </>

    )
}

export default Checkout
