import React from "react";
import {
  AppstoreOutlined,
  MailOutlined,
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  CreditCardOutlined,
  ShoppingOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  CompassOutlined,
  LockOutlined,
  EnvironmentOutlined,
  LoginOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Menu, Layout } from "antd";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import { handleLogout } from "@/Redux/reducerSlice/users";



function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

// Logout function
//  const router = useRouter();
//  const handleLogout = () => {
//    router.push('/')

//  }

// const items = [
//   {
//       key: 1,
//       icon: <AppstoreOutlined className='text-5xl font-bold' />,
//       label: 'Dashboard'
//   },
//   {
//       key: 2,
//       icon: <UserOutlined />,
//       label: 'Personal Info',
//   },
//   {
//       key: 3,
//       icon: <CreditCardOutlined />,
//       label: 'Payment method',
//   },

//   {
//       key: 4,
//       icon: <ShoppingOutlined />,
//       label: 'My Order',
//   },
//   {
//       key: 5,
//       icon: <HeartOutlined />,
//       label: 'My Wishlist',
//   },
//   {
//       key: 6,
//       icon: <ShoppingCartOutlined />,
//       label: 'My Cart',
//   },
//   {
//       key: 7,
//       icon: <EnvironmentOutlined />,
//       label: 'My Address',

//   },
//   {
//       key: 8,
//       icon: <EditOutlined />,
//       label: 'Product Review',
//   },

//   {
//       key: 9,
//       icon: <LockOutlined />,
//       label: 'Change Password',
//   },
//   {
//       key: 10,
//       icon: <LoginOutlined />,
//       label: 'Logout',
//       onClick: handleLogout,
//   }
// ];

const onClick = (e) => {
  console.log("click", e);
};

const UserDashSidebar = () => {
  const { isLoggedIn, userDetails } = useSelector(state => state.users)
  const router = useRouter();
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(handleLogout())
    
    // router.push("/");
  };

  return (
    <div className="w-[full]  px-12 h-[90vh] bg-green-200 shadow-sm  border-2 border-red-500 mt-10  z-10">
      <Layout>
        <Menu
          className=" shadow-md text-base h-[90vh] font-semibold text-slate-800 gap-10"
          onClick={onClick}
          style={{
            width: 256,
            height: 480,
          }}
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: 1,
              icon: <AppstoreOutlined className="text-5xl font-bold" />,
              label: "Dashboard",
            },
            {
              key: 2,
              icon: <UserOutlined />,
              label: "Personal Info",
            },
            {
              key: 3,
              icon: <CreditCardOutlined />,
              label: "Payment method",
            },

            {
              key: 4,
              icon: <ShoppingOutlined />,
              label: "My Order",
            },
            {
              key: 5,
              icon: <HeartOutlined />,
              label: "My Wishlist",
            },
            {
              key: 6,
              icon: <ShoppingCartOutlined />,
              label: "My Cart",
            },
            {
              key: 7,
              icon: <EnvironmentOutlined />,
              label: "My Address",
            },
            {
              key: 8,
              icon: <EditOutlined />,
              label: "Product Review",
            },

            {
              key: 9,
              icon: <LockOutlined />,
              label: "Change Password",
            },
            {
              key: 10,
              icon: <LoginOutlined />,
              label: "Logout",
              onClick: handleLogout,
            },
          ]}
        />
      </Layout>
    </div>
  );
};

export default UserDashSidebar;
