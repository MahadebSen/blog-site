import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EachBlogDetails = () => {
  const params = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch("FakeBlogs/FakeBlogs.json")
      .then((res) => res.json())
      .then((data) => setBlog(data.filter((item) => item._id === params.id)));
  }, [params]);

  return (
    <div className="max-w-6xl mx-auto">
      {blog.map((item) => (
        <div className="mx-10 my-12">
          <p className="text-center text-3xl">{item.title}</p>
          <div className="flex flex-col md:flex-row items-center gap-2 justify-center my-5">
            <p>Written by: {item.creator}</p>
            <p className=" hidden md:block">|</p>
            <p>{item.occupation}</p>
          </div>
          <div className="mx-5 text-[#cbcdd2]">
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EachBlogDetails;
