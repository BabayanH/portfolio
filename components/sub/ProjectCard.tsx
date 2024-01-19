import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  description: string;
  url: string; // URL prop for the link
}

const ProjectCard = ({ src, description, url }: Props) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block">
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
        <Image
          src={src}
          alt="Project Image"
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
        <div className="relative p-4">
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
