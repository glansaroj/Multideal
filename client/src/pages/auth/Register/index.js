// Module import
import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer/Footer";
import { Provider, useDispatch } from 'react-redux';




// Components importing
import Header from "@/components/Header/Header";
import Navbar from "@/components/Header/Navbar";
import { data } from "autoprefixer";
import { setUserDetails } from "@/Redux/reducerSlice/users";
import { MenuGroup } from "@chakra-ui/react";

const Register = () => {
  const router = useRouter()

   // Calling useDispath Hook:
   const dispatch = useDispatch();
  

 
    // Toastify popup
    const notify = () => {
      data ?
        toast.success("Congrats!, Your're Successfully register."):
        toast.error("Oops!, This User already exist.");
    }


  // const Error = () => toast.error("Oops!, This user already exist.");




  const RegisterSchema = Yup.object().shape({
    fullName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required("Full Name is a required field"),

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

  confirmPassword: Yup.string()
        .min(5, 'Must be more than 8 characters!')
        .required('Confirm Password is a required field')
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });


  // Register Handling:
  const handleRegister = async(values) => {
    const {confirmPassword, ...formFields }= values
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formFields)
  };

 


//* FIXING ON THIS PART -------->

  const res = await fetch('http://localhost:4000/register',requestOptions)
  const data = await res.json()
  
  if(data && res.status == 200) {
    debugger;
    alert(JSON.stringify(data));
    dispatch(setUserDetails(data))
    alert(data.msg)
    // toast.success("Congrats!, Your're Successfully register.")

    setTimeout(() => {
     // msg.info(data.msg)
     router.push('/')


    }, 2000);    
  
  } else {
    // msg.info(res.statusText);
    toast.error("Oops!, This User already exist.");

   
  }
  }


////////////////////////

  return (
    <>
     {/* <Header /> */}
     {/* <Navbar /> */}

      <div className="container  bg-gray-100 text-gray-900 flex flex-row min-h-screen  w-full justify-center items-center">
        <div className="app--login mt-12 flex flex-col text-gray-800 text-left justify-center items-center">
          <h1 className="text-2xl xl:text-3xl font-bold mb-3">
            Create a new Account
          </h1>
          <Formik
            initialValues={{
              fullName:"",
              email: "",
              password: "",
              confirmPassword : "",
            }}
            validationSchema={RegisterSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
              handleRegister(values)
            }}
          >
            {({ errors, touched }) => (
              <Form className="h-5/6 w-[530px] bg-gray-200 bg-opacity-30 rounded-md shadow-md py-10 my-3 px-12 mb-20">
                {/* <label for="firstName">First Name*</label> */}
                <Field
                  className="w-full px-8 py-4 mt-3 focus:border-yellow-500  rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
                  name="fullName"
                  placeholder="Full Name"
                />
                {errors.fullName && touched.fullName ? (
                  <div className="mt-1 text-xs text-red-400">{errors.fullName}</div>
                ) : null}

              

                <Field
                  className="w-full px-8 py-4 mt-7 focus:border-yellow-500  rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none  focus:bg-white"
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


                <Field
                  className="w-full px-8 py-4 focus:border-yellow-500 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:bg-white mt-7"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div className="mt-1 text-xs text-red-400">
                    {errors.confirmPassword}
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
                    
                    <p>I agree to <Link className="underline" href={''}> Terms & conditions</Link> </p>
                  </label>

                  </div>





                <button
                  className="signup mt-11 tracking-wide font-bold bg-yellow-500 text-gray-800 w-full py-4 rounded-lg hover:bg-gray-800  hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  type="submit"
                  onClick={notify }
                >
              
                  <span class="ml-4">Sign Up</span>
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
                  <span class="ml-4">Sign up with Google</span>
                </button>

                <p className="text-center mt-7 mb-5 text-gray-500">
                  Already have an account ?{" "}
                  <Link
                    className="ml-1 text-yellow-500 font-medium"
                    href="/auth/Login"
                  >
                  Login{" "}
                  </Link>
                </p>



               

             
              </Form>
            )}
          </Formik>
          {/* <p class>
            Don't have an account? <Link href="/register">Sign up</Link>
          </p> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
