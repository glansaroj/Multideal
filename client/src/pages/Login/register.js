// Module import
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Link from "next/link";

const Register = () => {
  const RegisterSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });
  return (
    <>
      <div className="container  bg-gray-100 text-gray-900 flex flex-row min-h-screen  w-full justify-center items-center">
        <div className="app--login mt-12 flex flex-col text-gray-800 text-left items-center">
          <h1 class="text-2xl xl:text-3xl font-bold mb-3">
            Create a new Account
          </h1>
          <Formik
            initialValues={{
              phoneNumber: "",
              password: "",
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="h-5/6 w-5/6 bg-gray-200 bg-opacity-30 rounded-md shadow-md py-16 px-6 mb-20">
                <label for="firstName">First Name*</label>
                <Field
                  className="w-full px-8 py-4 mt-12 focus:border-yellow-500  rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
                  name="FirstName"
                  placeholder=""
                />
                {errors.phoneNumber && touched.phoneNumber ? (
                  <div>{errors.phoneNumber}</div>
                ) : null}

                <Field
                  className="w-full px-8 py-4 focus:border-yellow-500 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:bg-white mt-7"
                  name="password"
                  type="text"
                  placeholder="Last Name"
                />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}



                <button
                  className="mt-9 tracking-wide font-bold bg-yellow-500 text-gray-800 w-full py-4 rounded-lg hover:bg-gray-800  hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  type="submit"
                >
              
                  <span class="ml-3">Register</span>
                </button>

               

             
              </Form>
            )}
          </Formik>
          {/* <p class>
            Don't have an account? <Link href="/register">Sign up</Link>
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Register;
