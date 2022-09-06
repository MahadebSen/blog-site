import React, { useEffect, useState } from "react";
import EachBlogView from "../BlogsComponents/EachBlogView";

const Technology = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("FakeBlogs/FakeBlogs.json")
      .then((res) => res.json())
      .then((data) =>
        setBlogs(data.filter((item) => item.category === "Technology"))
      );
  }, []);

  return (
    <section>
      <p className="text-center text-2xl my-8">Technological Blogs</p>
      <div className="my-4 mx-10 flex flex-col gap-3">
        {blogs.map((item) => (
          <EachBlogView key={item._id} item={item}></EachBlogView>
        ))}
      </div>
    </section>
  );
};

export default Technology;
