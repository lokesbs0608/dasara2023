import React from "react";
import HeaderComponent from "../Header";


const LayoutComponent = ({ children }: any) => {
  return (
    <div className="">
      <div style={{ zIndex: "1000" }} className="fixed top-0 left-0 w-full">
        <HeaderComponent />
      </div>
      <div className="mt-12" >{children}</div>
    </div>
  );
};

export default LayoutComponent;
