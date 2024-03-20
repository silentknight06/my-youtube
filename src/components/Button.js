import React from "react";
const Listv = [
  "All",
  "Gaming",
  "Song",
  "Live",
  "News",
  "cooling",
  "Vlog",
  "Football",
  "Tech",
  "Funny",
  "Horror",
  "Fly",
  
];

const Button = () => {
  return (
    <div  >
      {Listv.map((nam,idx) => (
        
        <button className=" bg-gray-300  px-5 m-2 border rounded-xl  " key= {idx}>
          {nam}
        </button>
        
      ))}
    </div>
  );
};

export default Button;
