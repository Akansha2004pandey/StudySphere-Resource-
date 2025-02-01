import React from 'react'
import {TriangleAlert} from "lucide-react";
const PageNotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
       <div className='text-[200px] font-bold text-gray-600'>404</div>
       <div className='text-3xl font-bold text-gray-500'>
         <div className='flex gap-6'><div>Page Not Found</div><TriangleAlert className='w-8 h-8' /></div> 
       </div>
    </div>
  )
}

export default PageNotFound
