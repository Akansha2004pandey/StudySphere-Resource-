"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
const page = () => {
  const router=useRouter();
  return (
    <div className='flex flex-col items-center justify-center gap-3 w-full h-screen'>
       Resource CSE
       <Button variant={"default"} onClick={()=>router.push('/1')}>2027</Button>
       <Button variant={"default"} onClick={()=>router.push('/2')}>2028</Button>
    </div>
  )
}

export default page
