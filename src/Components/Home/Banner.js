import React from "react";
import banner from "../../images/Banner-no-bg.png";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center mx-10 mb-16 md:mb-3">
      <div className="text-left">
        <p className="font-semibold text-4xl mb-4">
          Create your Blogs with Shodwe Studio
        </p>
        <p className="mb-4">
          Build a professional website that grows with your business.
        </p>
        <button className="bg-[#7367f0] p-2 rounded-md text-sm border-2 border-[#7367f0] hover:bg-transparent">
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
