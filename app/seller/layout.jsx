"use client";
import React from "react";
import Navbar from "../components/seller/Navbar";
import Sidebar from "../components/seller/Sidebar";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex w-full">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default layout;
