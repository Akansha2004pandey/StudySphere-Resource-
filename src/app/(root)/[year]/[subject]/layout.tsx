import React from "react";
import { Button } from "@/components/ui/button";
import { custom } from "zod";
export default async function SubjectLayout({children, params}:{
    children:React.ReactNode,
params:Promise<{year:string,subject:string}>
}){
    const {year,subject}=await params;
    return (
        <div>
     <div className='py-40 flex flex-col items-center justify-center h-screen'>
       <div className='text-[50px] font-bold text-gray-600'>{subject}</div>
       <div className='flex justify-center items-center gap-4 rounded-lg py-3 px-5 bg-[#073b4c]'> 
          <div className='font-bold text-white text-2xl'><Button variant={"custom"}>Drive</Button></div>
          <div className='font-bold text-white text-2xl'><Button variant={"custom"}>PPTs</Button></div>
          <div className='font-bold text-white text-2xl'><Button variant={"custom"}>Notes</Button></div>
          <div className='font-bold text-white text-2xl'><Button  variant={"custom"}>Youtube Playlists</Button></div>
       </div>
    </div>
        <div>
            {children}
        </div>
        </div>
    )

}