import React from "react";
import {
  ShoppingOutlined,
  ShopOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";

const Dashboard = () => {
  return (
    <div className="container ">
      <div className="flex flex-row  gap-16 mt-4">
        {/* sales */}
        <div className="h-[125px] flex flex-row items-center px-5 justify-between w-[250px] rounded-lg bg-gray-50 shadow-md">
          <div className="text-3xl w-[60px] h-[60px] rounded-2xl bg-indigo-400 text-white flex items-center justify-center">
            {" "}
            <ShoppingCartOutlined />{" "}
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800">Rs.245355 /-</h1>
            <p className="text-md text-gray-400 mt-1"> Total Sales</p>
          </div>
        </div>

        {/* Products */}
        <div className="h-[125px] flex flex-row items-center px-5 justify-between w-[250px] rounded-lg bg-gray-50 shadow-md">
          <div className="text-3xl w-[60px] h-[60px] rounded-2xl bg-green-400 text-white flex items-center justify-center">
            {" "}
            <ShoppingOutlined />{" "}
          </div>
          <div className="mr-8">
            <h1 className="text-xl  font-bold text-slate-800"> 450</h1>
            <p className="text-md text-gray-400 mt-1"> Total Products</p>
          </div>
        </div>

        {/* Users */}
        <div className="h-[125px] flex flex-row  items-center px-5 justify-between w-[250px] rounded-lg bg-gray-50 shadow-md">
          <div className=" text-3xl w-[60px] h-[60px] rounded-2xl bg-slate-600 text-white flex items-center justify-center">
            {" "}
            <UserOutlined /> {" "}
          </div>
          <div className="mr-8">
            <h1 className="text-xl font-bold text-slate-800"> 2500</h1>
            <p className="text-md text-gray-400 mt-1"> Total Users</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
