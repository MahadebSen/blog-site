import React, { useEffect, useState } from "react";
import EachBlogView from "../BlogsComponents/EachBlogView";

const BlogsPart = ({ blogs }) => {
  const [technology, setTechnology] = useState([]);
  const [entertainment, setEntertainment] = useState([]);
  const [community, setCommunity] = useState([]);
  const [searchState, setSearchState] = useState(false);
  const [searchBlogs, setSearchBlogs] = useState([]);

  useEffect(() => {
    const technologyBlogs = blogs
      .filter((item) => item.category === "Technology")
      .reverse()
      .slice(0, 3);
    setTechnology(technologyBlogs);

    const entertainmentBlogs = blogs
      .filter((item) => item.category === "Entertainment")
      .reverse()
      .slice(0, 3);
    setEntertainment(entertainmentBlogs);

    const communityBlogs = blogs
      .filter((item) => item.category === "Community")
      .reverse()
      .slice(0, 3);
    setCommunity(communityBlogs);
  }, [blogs]);

  const handleSearch = async (e) => {
    e.preventDefault();
    setSearchState(true);
    const searchText = await e.target.searchText.value;
    const searchItems = blogs.filter((item) => item.title === searchText);
    setSearchBlogs(searchItems);
    e.target.searchText.value = "";
  };

  return (
    <div className="my-5 mx-10">
      <p className="text-3xl text-center">Blogs</p>

      <form
        onSubmit={handleSearch}
        className="flex items-center justify-center flex-row gap-3 my-12"
      >
        <input
          className="h-8 rounded-md px-3 text-black"
          type="text"
          name="searchText"
          placeholder="Search by name"
          required
        />
        <button className="bg-[#7367f0] text-sm px-3 py-2 rounded-md">
          Search
        </button>
      </form>

      {searchState ? (
        searchBlogs.length >= 1 ? (
          <div className="mt-4 flex flex-col gap-3">
            {searchBlogs.map((item) => (
              <EachBlogView key={item._id} item={item}></EachBlogView>
            ))}
          </div>
        ) : (
          <p className="text-center my-5 text-white">No result found</p>
        )
      ) : (
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
      )}
    </div>
  );
};

export default BlogsPart;
