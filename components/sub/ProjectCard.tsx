import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  description: string;
  url: string;
}

const ProjectCard = ({ src, description, url }: Props) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="block">
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:shadow-[#2A0E61] transition-shadow">
        <Image
          src={src}
          alt="Project Image"
          width={1000}
          height={600}
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
