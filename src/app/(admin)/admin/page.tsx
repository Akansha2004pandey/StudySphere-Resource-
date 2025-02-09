"use client";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
const  page=()=> {
  const router = useRouter();
  return (
    <div>
       <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center justify-center">
        <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
        Welcome back{" "}
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Admin</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">Admin</span>
          </div>
        </div>
        
      </h2>
      <div className="space-y-8 flex flex-col">
      <button 
        className="customButton" type="button" onClick={() => router.back()}
        >
        Go Back
      </button>
      <button
        className="customButton"
        onClick={() => router.push("/admin/update")}
      >
        Update material
      </button>
      <button
        className="customButton"
        onClick={() => router.push("/admin/delete")}
      >
        Delete material
      </button>
      <button
        className="customButton"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
      </div>
        </div>
   
      
    </BackgroundBeamsWithCollision>
    
    </div>
   

  );
}
export default page;

