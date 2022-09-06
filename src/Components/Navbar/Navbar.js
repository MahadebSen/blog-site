import React, { useEffect, useState } from "react";
import logo from "../../images/logo 1.png";

const Navbar = ({ data }) => {
  return (
    <div className="flex items-center justify-between bg-[#283046] mx-6 my-5 rounded-md px-5 py-2">
      <div>
        <img className="w-[155px] rounded-md" src={logo} alt="" />
      </div>

      <ul className="flex items-center text-white flex-row gap-8">
        <li>Technology</li>
        <li>Entertainment</li>
        <li>Community</li>
      </ul>
    </div>
  );
};

export default Navbar;
