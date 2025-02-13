"use client"
import { BackgroundBoxesDemo } from '@/components/shared/BackgroundBoxes'
import React from 'react'
import { useRouter } from 'next/navigation'
import Footer from '@/components/shared/Footer'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "@/constants/index";
const page = () => {
  const router = useRouter();
  return (
    <>
       <BackgroundBoxesDemo />
       <div className="w-full flex flex-col items-center justify-around p-10 bg-[url('https://images.unsplash.com/photo-1472289065668-ce650ac443d2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGV4dCUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D')] bg-cover bg-center bg-no-repeat">
          <h1 className='text-3xl text-blue-950 font-bold text-center'>Start exploring now</h1>
          <div className="flex flex-col align-middle justify-center md:justify-between md:flex-row h-96 w-3/5 items-center p-4 space-y-16">
              <div className="first m-1 flex flex-col justify-between">
                <h2 className="text-xl md:text-3xl" >
                  First year
                </h2>
                <button className="customButton" onClick={() => router.push(`/1`)}>Check now</button>
              </div>
                <div className="second m-1 flex flex-col items-center">
                <h2 className="text-xl md:text-3xl" >
                  Second year
                </h2>
                <button className="customButton" onClick={() => router.push(`/2`)}>Check now</button>
              </div>
          </div>
       </div>
       <div className="contributors bg-slate-900 p-6 flex flex-col items-center justify-center">
          <p className="text-center text-2xl text-green-200">Our contributors</p>
          <AnimatedTestimonials testimonials={testimonials} />
          <Footer />
       </div>
    </>
  )
}

export default page
