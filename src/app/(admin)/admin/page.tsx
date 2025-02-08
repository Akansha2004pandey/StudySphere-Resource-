"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
const  page=()=> {
  return (
    <div className="">
       <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        What&apos;s cooler than Beams?{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Exploding beams.</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Exploding beams.</span>
          </div>
        </div>
        
      </h2>
      <Button
        className="w-full bg-[#7d52c6] hover:bg-[#b0d7d3] text-white font-semibold py-2 rounded-lg transition w-[100px] my-5"
        onClick={() => signOut()}
      >
        Sign Out
      </Button>
        </div>
   
      
    </BackgroundBeamsWithCollision>
    
    </div>
   

  );
}
export default page;

