import React from "react";
import { useNavigate } from "react-router-dom";

const EachBlogView = ({ item }) => {
  const navigate = useNavigate();
  const { _id, title, creator, occupation, date, content } = item;

  const handleClick = (id) => {
    navigate(id);
  };

  return (
    <div
      onClick={() => handleClick(_id)}
      className="flex flex-col gap-2 md:flex-row justify-between rounded-md p-3 bg-[#343d55] text-[#cbcdd2] transition ease-in-out delay-70 hover:-translate-1 hover:scale-105 duration-300 hover:shadow-lg cursor-pointer"
    >
      <div>
        <p className=" text-lg font-medium">{title}</p>
        <div className="flex flex-row items-center gap-2">
          <p className="text-xs">By: {creator}</p>
          <p>|</p>
          <p className="text-xs">{occupation}</p>
        </div>
        <p className="mt-2 text-sm">{content.slice(0, 150) + "..."}</p>
      </div>
      <div>
        <p className="text-xs">{date}</p>
      </div>
    </div>
  );
};

export default EachBlogView;
