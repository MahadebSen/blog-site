import React, { useEffect, useState } from "react";
import EachBlogView from "../BlogsComponents/EachBlogView";

const BlogsPart = ({ blogs }) => {
  const [technology, setTechnology] = useState([]);
  const [entertainment, setEntertainment] = useState([]);
  const [community, setCommunity] = useState([]);

  useEffect(() => {
    const technologyBlogs = blogs
      .filter((item) => item.category === "Technology")
      .slice(0, 3);
    setTechnology(technologyBlogs);

    const entertainmentBlogs = blogs
      .filter((item) => item.category === "Entertainment")
      .slice(0, 3);
    setEntertainment(entertainmentBlogs);

    const communityBlogs = blogs
      .filter((item) => item.category === "Community")
      .slice(0, 3);
    setCommunity(communityBlogs);
  }, [blogs]);

  return (
    <div className="my-5 mx-10">
      <p className="text-3xl text-center">Blogs</p>
      <div className="my-7">
        <div className="my-5">
          <div className="flex flex-row gap-3 items-center">
            <p className="text-lg">Technology blogs</p>
            <div className="bg-white w-32 h-[1px]"></div>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            {technology.map((item) => (
              <EachBlogView key={item._id} item={item}></EachBlogView>
            ))}
          </div>
        </div>

        <div className="my-5">
          <div className="flex flex-row gap-3 items-center">
            <p className="text-lg">Entertainment blogs</p>
            <div className="bg-white w-32 h-[1px]"></div>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            {entertainment.map((item) => (
              <EachBlogView key={item._id} item={item}></EachBlogView>
            ))}
          </div>
        </div>

        <div className="my-5">
          <div className="flex flex-row gap-3 items-center">
            <p className="text-lg">Community blogs</p>
            <div className="bg-white w-32 h-[1px]"></div>
          </div>
          <div className="mt-4 flex flex-col gap-3">
            {community.map((item) => (
              <EachBlogView key={item._id} item={item}></EachBlogView>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPart;
