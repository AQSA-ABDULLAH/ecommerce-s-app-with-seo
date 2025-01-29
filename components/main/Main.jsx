import React from "react";
import Section from "./Section";

function Main() {
  const sections = [
    {
      image: "/assets/store1.jpg",
      title: "Apple Headphones",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        laboriosam, veniam vel dolorum enim laborum consectetur repudiandae
        fuga tempore odit consequuntur doloremque recusandae delectus quam?
        Animi fuga pariatur officiis rerum officia tempore tenetur, rem totam
        debitis, temporibus eum amet nihil.`,
      price: "$50.00",
      reverse: false,
    },
    {
      image: "/assets/store2.jpg",
      title: "Rollex Watch",
      description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
        laboriosam, veniam vel dolorum enim laborum consectetur repudiandae
        fuga tempore odit consequuntur doloremque recusandae delectus quam?
        Animi fuga pariatur officiis rerum officia tempore tenetur, rem totam
        debitis, temporibus eum amet nihil.`,
      price: "$50.00",
      reverse: true,
    },
  ];

  return (
    <div className="py-[128px] font-style">
      <div className="mx-[283px] px-[10px]">
        <h2 className="text-[36px] mb-[64px] uppercase font-bold">
          Featured <span className="text-[#DA0037]">ITEMS</span>
        </h2>
        {sections.map((section, index) => (
          <Section key={index} {...section} />
        ))}
      </div>
    </div>
  );
}

export default Main;

