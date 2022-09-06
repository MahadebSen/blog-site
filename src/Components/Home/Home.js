import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import BlogsPart from "./BlogsPart";

const Home = () => {
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    fetch("FakeBlogs/FakeBlogs.json")
      .then((res) => res.json())
      .then((data) => setAllBlogs(data));
  }, []);

  return (
    <div>
      <Banner></Banner>
      <BlogsPart></BlogsPart>
    </div>
  );
};

export default Home;
