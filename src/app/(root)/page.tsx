"use client"
import { BackgroundBoxesDemo } from '@/components/shared/BackgroundBoxes'
import React from 'react'
import { ThreeDCard } from '@/components/shared/AboutTheDevs'
import { useRouter } from 'next/navigation'
import Footer from '@/components/shared/Footer'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "@/constants/index";
const page = () => {
  const router = useRouter();
  return (
    <>
       <BackgroundBoxesDemo />
       <div className="w-full flex flex-col items-center justify-around p-10 bg-[url('https://img.freepik.com/free-vector/elegant-white-background-with-wave-design_1017-39102.jpg')] bg-cover bg-center bg-no-repeat">
          <h1 className='text-3xl text-blue-950 font-extrabold text-center'>Currently we cater...</h1>
          <div className="flex h-96 justify-between w-3/5 items-center p-4">
              <div className="first m-1 flex flex-col justify-between">
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]" >
                  First year
                </h2>
                <button className="customButton" onClick={() => router.push(`/1`)}>Check now</button>
              </div>
                <div className="second m-1 flex flex-col items-center">
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em]" >
                  Second year
                </h2>
                <button className="customButton" onClick={() => router.push(`/2`)}>Check now</button>
              </div>
          </div>
       </div>
       <div className='p-4'>
       <h2 className='text-2xl mt-20 text-center text-blue-950'>About the developers</h2>
       <div className="flex justify-evenly items-center">
            <ThreeDCard name="Akansha" description="NSUT CSE'26" imgSrc='https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFraW5nJTIwcGhvdG98ZW58MHx8MHx8fDA%3D' linkedin='www.linkedin.com'/>
            <ThreeDCard name="Sanskriti" description="NSUT CSE'26" imgSrc='https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFraW5nJTIwcGhvdG98ZW58MHx8MHx8fDA%3D' linkedin='www.linkedin.com'/>
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
