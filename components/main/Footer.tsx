import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div> */}
          <div className="mt-5 p-8 flex flex-col gap-5 items-center text-gray-100">
            <p>
              <a
                href="/files/HovsepBResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Click here for Resume
              </a>
            </p>

            <a
              href="mailto:babayanhovsep01@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="inline mr-2" />
              hovbabayan22@gmail.com
            </a>
            {/* <a href="tel:+18184246036" target="_blank" rel="noopener noreferrer">
          <FaPhone className="inline mr-2" />
          +1(818)-424-6036
        </a> */}
            <a
              href="https://www.linkedin.com/in/hovsepbabayan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="inline mr-2" />
              LinkedIn
            </a>
          </div>
          {/* <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Become Sponsor</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Learning about me</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                mifwebchain@gmail.com
              </span>
            </p>
          </div> */}
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; 2023. Designed by Hovsep Babayan
        </div>
      </div>
    </div>
  );
};

export default Footer;
