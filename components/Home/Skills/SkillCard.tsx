import React from "react";
import Image from "next/image";
import Html from "@/SkillsImages/Html.png";

// import html from ''

// define props type
type Props = {
  skill: {
    id: number;
    title: string;
    image: string;
    percent: string;
  };
};

const SkillCard = ({ skill }: Props) => {
  const { image, percent, title } = skill;
  return (
    <div
      className="p-6 hover:bg-green-900 duration-300 transition-all cursor-pointer 
    rounded-lg bg-gray-900 flex flex-col justify-center items-center"
    >
      <div className="w-[50px] h-[60px]">
        <Image src={image} alt={"html"} width={100} height={100} />
      </div>

      {/* <img src={Html} alt={title} /> */}
      <h1 className="text-[18px] mt-4 text-white font-[600] ">{title}</h1>
      <div className="bg-black mt-4 rounded-lg p-2 text-white opacity-40">
        {percent}
      </div>
    </div>
  );
};

export default SkillCard;
