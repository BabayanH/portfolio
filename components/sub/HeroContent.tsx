import Image from "next/image";
import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";

const HeroContent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-6 sm:px-10 md:px-20 mt-24 sm:mt-32 md:mt-40 w-full z-[20] gap-10">
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] inline-flex items-center">
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </div>

        <div className="flex flex-col gap-6 mt-4 md:mt-6 text-4xl sm:text-5xl md:text-6xl font-bold text-white max-w-[600px]">
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </div>

        <p className="text-base sm:text-lg text-gray-400 my-4 md:my-5 max-w-[600px]">
          Hi I&apos;m Hovsep, Computer Science graduate from Cal Poly Pomona.
          Dive into my portfolio and discover projects that reflect my journey —
          from intricate web designs to mobile apps.
        </p>
      </div>

      <div className="w-full h-full flex justify-center items-center">
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={520}
          width={520}
        />
      </div>
    </div>
  );
};

export default HeroContent;
