"use client";
import React from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <div className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] inline-flex items-center">
        <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Think better with Next.js 13
        </h1>
      </div>
      <div className="text-[26px] sm:text-[30px] text-white font-medium mt-[10px] text-center mb-[12px]">
        Making apps with modern technologies
      </div>
      <div className="cursive text-[18px] sm:text-[20px] text-gray-200 mb-8 sm:mb-10 mt-[8px] text-center">
        Never miss a task, deadline or idea
      </div>
    </div>
  );
};

export default SkillText;
