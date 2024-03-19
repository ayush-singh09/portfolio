import React from "react";
import Card from "./Card";

function Blog() {
  return (
    <div className=" flex flex-col gap-6 w-full h-screen">
      <div className="blog-head flex justify-between items-center px-10 py-14 leading-[0]">
        <h1 className="text-[6vw] font-bold">Blog Posts</h1>
        <select className="bg-transparent p-1 rounded-md border outline-none" name="Category" id="Category">
          <option className="bg-black outline-none border-none" value="all">All</option>
          <option className="bg-black outline-none border-none" value="all">Technical</option>
          <option className="bg-black outline-none border-none" value="all">Philosophy</option>
        </select>
      </div>
      <div className="p-10 flex gap-10 flex-wrap justify-evenly">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Blog;
