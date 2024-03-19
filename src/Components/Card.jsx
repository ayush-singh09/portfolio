import React from "react";

function Card() {
  return (
    <div className="card w-[300px] bg-indigo-950 p-2 rounded-md">
      <div className="bg-indigo-900 w-full h-[180px] rounded-md hover:scale-[0.98]"></div>
      <div className="uppercase text-sm font-bold text-sky-500 pt-[10px] px-[7px]">
        Illustration{" "}
      </div>
      <div className="font-bold text-zinc-300 p-[7px]">
        <h1>A heading that must span over two lines.</h1>
        <div className="text-zinc-400 font-medium text-[13px] pt-[20px]">
          By <span className="font-bold">Ayush</span> 4 days ago
        </div>
      </div>
    </div>
  );
}

export default Card;
