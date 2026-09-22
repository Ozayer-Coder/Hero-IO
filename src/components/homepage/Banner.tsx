import React from "react";
import BannerImage from "@/assets/hero.png";
import Image from "next/image";
const Banner = () => {
  return (
    <div className="container mx-auto flex flex-col  justify-between items-center gap-8 py-8">
      {/* content */}
      <div className="flex flex-col gap-4 justify-center items-center text-center">
        <h1 className="text-6xl font-bold">
          We Build <br /> <span className="text-[#632EE3]">Productive</span>{" "}
          Apps
        </h1>
        <p className="text-lg text-gray-600">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. <br /> Our goal is to turn your
          ideas into digital experiences that truly make an impact.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#632EE3] text-white px-6 py-3 rounded-md hover:bg-[#5a29c7]">
            Google Play
          </button>
          <button className="bg-[#632EE3] text-white px-6 py-3 rounded-md hover:bg-[#5a29c7]">
            App Store
          </button>
        </div>
      </div>
      {/* image */}
      <div>
        <Image src={BannerImage} alt="Banner" />
      </div>
    </div>
  );
};

export default Banner;
