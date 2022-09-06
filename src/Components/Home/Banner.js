import React from "react";
import banner from "../../images/Banner-no-bg.png";

const Banner = () => {
  return (
    <div className="flex items-center justify-center mx-10">
      <div className="text-left">
        <p className="font-semibold text-4xl mb-4">
          Create your Blogs with Shodwe Studio
        </p>
        <p className="mb-4">
          Build a professional website that grows with your business.
        </p>
        <button className="bg-[#7367f0] p-3 rounded-md text-sm">
          Create A Blog
        </button>
      </div>
      <div>
        <img src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
