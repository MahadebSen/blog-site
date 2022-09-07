import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import BlogsPart from "./BlogsPart";

const Home = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  const blogData = localStorage.getItem("blogData");

  useEffect(() => {
    if (blogData) {
      const localData = JSON.parse(blogData);
      setAllBlogs(localData);
    } else {
      fetch("FakeBlogs/FakeBlogs.json")
        .then((res) => res.json())
        .then((data) => {
          setAllBlogs(data);
          localStorage.setItem("blogData", JSON.stringify(data));
        });
    }
  }, [blogData]);

  return (
    <div className="max-w-6xl mx-auto">
      <Banner></Banner>
      <BlogsPart blogs={allBlogs}></BlogsPart>
    </div>
  );
};

export default Home;
