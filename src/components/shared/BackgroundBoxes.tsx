"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "@/lib/utils";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import Image from "next/image";
import { words } from "@/constants";

export function BackgroundBoxesDemo() {
  return (
    <div className="hero-banner relative w-full overflow-hidden bg-slate-800 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-800 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Image
      src="/banner-img.png"
      alt="background"
      height={480}
      width={480} 
      className="z-10 top-0 md:mt-10"
      />

      <Boxes />
      <h1 className={cn("text-white relative text-3xl md:text-5xl font-bold mx-4")}>
        Get curated study material <br/> for your semester exams! 
      </h1>
      <div className="z-10 text-gray-500">
          <TypewriterEffectSmooth words={words}/>
      </div>
    </div>
  );
}
