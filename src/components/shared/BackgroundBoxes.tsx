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
      src="https://png.pngtree.com/png-vector/20230107/ourmid/pngtree-smiling-people-study-together-with-book-using-computer-png-image_6553883.png"
      alt="background"
      height={480}
      width={480} 
      className="z-10"
      />

      <Boxes />
      <h1 className={cn("text-white relative text-5xl font-bold")}>
        Get curated study material <br/> for your semester exams! 
      </h1>
      <TypewriterEffectSmooth words={words} className="text-white"/>
    </div>
  );
}
