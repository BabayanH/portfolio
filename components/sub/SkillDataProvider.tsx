// components/sub/SkillDataProvider.tsx
"use client";
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  name?: string;
}

export default function SkillDataProvider({ src, name }: Props) {
  const [broken, setBroken] = React.useState(false);

  return (
    <div className="group flex flex-col items-center justify-center">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm grid place-items-center transition-transform duration-200 group-hover:scale-105">
        {!broken ? (
          <Image
            src={src}
            alt={name || "skill"}
            width={64}
            height={64}
            className="w-10 h-10 md:w-12 md:h-12 object-contain"
            onError={() => setBroken(true)}
          />
        ) : (
          <span className="text-xs md:text-sm text-gray-200 px-2 text-center">
            {name || "Skill"}
          </span>
        )}
      </div>
      {name && (
        <span className="mt-2 text-xs md:text-sm text-gray-300 opacity-90">
          {name}
        </span>
      )}
    </div>
  );
}
