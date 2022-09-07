import React from "react";
import { v4 as uuidv4 } from "uuid";

const CreateBlog = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const _id = uuidv4();
    const creator = await e.target.name.value;
    const occupation = await e.target.occupation.value;
    const title = await e.target.title.value;
    const category = await e.target.category.value;
    const content = await e.target.story.value;
    const date = new Date().toString().split(" ").splice(1, 3).join(" ");

    const blog = { _id, creator, occupation, title, category, content, date };

    console.log(blog);
  };

  return (
    <section class="text-gray-600 body-font relative">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-12">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Create Your Blog
          </h1>
        </div>
        <form onSubmit={handleSubmit} class="lg:w-1/2 md:w-2/3 mx-auto">
          <div class="flex flex-wrap -m-2">
            <div class="p-2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-[#cbcdd2]">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-[#cbcdd2]">
                  Your occupation
                </label>
                <input
                  type="text"
                  name="occupation"
                  class="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-[#cbcdd2]">
                  Blog title
                </label>
                <input
                  type="text"
                  name="title"
                  class="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div class="p-2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-[#cbcdd2]">
                  Category
                </label>
                <select
                  name="category"
                  class="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option value="Technology">Technology</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Community">Community</option>
                </select>
              </div>
            </div>

            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-[#cbcdd2]">
                  Tell us your story
                </label>
                <textarea
                  id="message"
                  name="story"
                  class="w-full bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div class="p-2 w-full">
              <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CreateBlog;
