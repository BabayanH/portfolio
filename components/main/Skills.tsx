import React from "react";
import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "@/constants";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import StarsCanvas from "../sub/StarsCanvas";

// normalize to build a unique key per logo
const keyOf = (s: any) =>
  ((s?.Image as string) || (s?.skill_name as string) || "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "");

type SkillItem = { Image: string; skill_name?: string };

export default function Skills() {
  // merge all arrays, dedupe while preserving first occurrence order
  const merged: SkillItem[] = [
    ...Skill_data,
    ...Frontend_skill,
    ...Backend_skill,
    ...Full_stack,
    ...Other_skill,
  ];
  const seen = new Set<string>();
  const unique = merged.filter((s) => {
    const k = keyOf(s);
    if (!k || seen.has(k)) return false;
    seen.add(k);
    return true;
  });

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center gap-6 py-12 sm:py-16 md:py-20"
      style={{ transform: "scale(0.9)" }}
    >
      {/* animated background */}
      <StarsCanvas />

      <SkillText />

      {/* tidy, responsive grid — no more ragged edges */}
      <div className="w-full max-w-7xl mx-auto px-6">
        <div
          className="
            grid
            grid-cols-3
            sm:grid-cols-4
            md:grid-cols-6
            lg:grid-cols-8
            xl:grid-cols-10
            gap-6 md:gap-8
            place-items-center
          "
        >
          {unique.map((s, i) => (
            <SkillDataProvider
              key={keyOf(s) || i}
              src={s.Image}
              name={s.skill_name}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
