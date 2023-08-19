// Module import
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router";
import { setUserDetails } from "@/Redux/reducerSlice/users";
import { useDispatch } from 'react-redux';



const Login = () => {
  const router = useRouter()
  const dispatch = useDispatch()


// Login Handler
const handleLogin = async (values) => {

  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values)
    };
    const res = await fetch('http://localhost:5000/login', requestOptions)
    const data = await res.json()
    if (data && data.success && res.status == 200) {
      dispatch(setUserDetails(data))
      router.push('/')
      // msg.info(data.msg);
      toast.success("Successfully Login")
      // alert(data.msg)
    } else {
      // msg.info(data.msg);
      alert(data.info)
    }
  } catch (err) {
    // msg.info('Something went wrong!!');
    alert('Something went wrong!!')
    toast.error("Oops!, This there is error while login.")
   { console.log(err);}
  }

}



  // Login Schema
  const LoginSchema = Yup.object().shape({
    email: Yup.string()  
      .email("Invalid email address")
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

  return (
    <>

      {/* <Header /> */}
      {/* <Navbar /> */}
      <div className="container  bg-gray-100 text-gray-900 flex flex-row min-h-screen  w-full justify-center items-center">
        <div className="app--login mt-12 flex flex-col text-gray-800 text-left items-center">
          <h1 class="text-2xl xl:text-3xl font-bold mb-4">User Login</h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={values => {
              // same shape as initial values
              console.log(values);          
              handleLogin(values)
              // alert("Form is validated! Submitting the form...");

            }}
          >
            {({ errors, touched }) => (
              <Form className="h-5/6 w-[530px]  bg-gray-200 bg-opacity-30 rounded-md border shadow-lg py-12 px-12 mb-20">
                <Field
                  className="w-full px-8 py-4 -mt-2 focus:border-yellow-500  rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
                  name="email"
                  placeholder="Email"
                />
                {errors.email && touched.email ? (
                  <div className="mt-1 text-xs text-red-400">
                    {errors.email}
                  </div>
                ) : null}

                <Field
                  className="w-full px-8 py-4 focus:border-yellow-500 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:bg-white mt-7"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                {errors.password && touched.password ? (
                  <div className="mt-1 text-xs text-red-400">
                    {errors.password}
                  </div>
                ) : null}

                <div class="mt-4 flex items-center accent-gray-800 text-gray-500">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="mr-3"
                  />
                  <label className="text-sm mt-1 " for="remember">
                    {" "}
                    <p>Remember me</p>
                  </label>
                </div>
                <button
                  className="mt-10 tracking-wide font-bold bg-yellow-500 text-gray-800 w-full py-4 rounded-lg hover:bg-slate-800  hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  type="submit"
                 
                  
                >
                  <span class="text-md">Login</span>
                </button>
                <ToastContainer
                  position="top-center"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />

                <div class="my-8 border-b text-center">
                  <div class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-gray-100 transform translate-y-1/2">
                    Or
                  </div>
                </div>

                {/* google */}
                <button class="w-full  -mt-2 font-bold shadow-sm rounded-lg py-3 bg-gray-200  text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div class="bg-white p-2 rounded-full">
                    <svg class="w-4" viewBox="0 0 533.5 544.3">
                      <path
                        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                        fill="#4285f4"
                      />
                      <path
                        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                        fill="#34a853"
                      />
                      <path
                        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                        fill="#fbbc04"
                      />
                      <path
                        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                        fill="#ea4335"
                      />
                    </svg>
                  </div>
                  <span class="ml-4">Sign in with Google</span>
                </button>

                <p className="text-center mt-7 text-gray-500">
                  Don't have an account yet?{" "}
                  <Link
                    className="ml-1 text-yellow-500 font-medium"
                    href={"/auth/Register"}
                  >
                    Sign up{" "}
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>

      </div>
      <Footer />

    </>
  );
};

export default Login;
