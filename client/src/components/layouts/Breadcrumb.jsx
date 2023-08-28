import React from "react";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

const Breadcrumbed = () => {
  return (
    <div>
      <Breadcrumb
        className="px-12 py-7 text-base"
        items={[
          {
            href: "/",
            title: (
              <>
                <HomeOutlined />
                <span>Home</span>
              </>
            ),
          },
          {
            href: "/404",
            title: (
              <>
                <span className="text-slate-800 hover:text-yellow-500"> 404 </span>
              </>
            ),
          },
        ]}
      />
    </div>
  );
};

export default Breadcrumbed;
