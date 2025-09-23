import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
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
              href="mailto:hovbabayan22@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="inline mr-2" />
              hovbabayan22@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/hovsepbabayan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="inline mr-2" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy; {new Date().getFullYear()}. Designed by Hovsep Babayan
        </div>
      </div>
    </div>
  );
};

export default Footer;
