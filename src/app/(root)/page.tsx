"use client"
import { BackgroundBoxesDemo } from '@/components/shared/BackgroundBoxes'
import React from 'react'
import { useRouter } from 'next/navigation'
import Footer from '@/components/shared/Footer'
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { testimonials } from "@/constants/index";
import Image from 'next/image'
import { Button } from '@/components/ui/button'
const page = () => {
  const router = useRouter();
  return (
    <>
       <div className='h-fit'>
        <BackgroundBoxesDemo />
       </div>


       <div className="w-full flex flex-col items-center justify-around p-4 shadow-regal-blue bg-white shadow-2xl">
          <h1 className='text-3xl text-blue-950 font-bold text-center my-8'>Start exploring now</h1>
          <div className="flex flex-col align-middle justify-center mx-2 my-12 items-center gap-12">

            <div className="flex flex-col md:flex-row">
            <div className='flex flex-col md:flex-row justify-center space-x-8 items-center shadow-md rounded-md p-2 w-full hover:shadow-lg'>
              <div>
                <Image
                src="https://static.vecteezy.com/system/resources/previews/023/564/319/non_2x/hand-drawn-student-collage-illustration-free-png.png"
                alt="first"
                height={360}
                width={360}
              />
              </div>
              <div className="flex flex-col h-48 md:h-96 justify-center items-center align-middle space-y-8">
                <h2 className="text-xl md:text-3xl" >
                  First year
                </h2>
                <Button variant="secondary" onClick={() => router.push(`/1`)}>Check now</Button>
              </div>
            </div>


            <div className='flex flex-col md:flex-row justify-center space-x-8 items-center shadow-md rounded-md p-2 w-full hover:shadow-lg'>
              <div className="flex flex-col h-48 md:h-96 justify-center items-center align-middle space-y-8">
                <h2 className="text-xl md:text-3xl md:ml-6" >
                  Second year
                </h2>
                <Button variant="secondary" onClick={() => router.push(`/2`)}>Check now</Button>
              </div>
              <div>
                <Image
                src="https://static.vecteezy.com/system/resources/previews/023/564/211/non_2x/hand-drawn-student-collage-illustration-free-png.png"
                alt="first"
                height={360}
                width={360}
              />
              </div>
            </div>
            </div>

              <div className="flex flex-col md:flex-row">
              <div className='flex flex-col md:flex-row justify-center space-x-8 items-center shadow-md rounded-md p-2 w-full hover:shadow-lg'>
              <div>
                <Image
                src="https://static.vecteezy.com/system/resources/previews/023/556/385/non_2x/hand-drawn-student-collage-illustration-free-png.png"
                alt="first"
                height={360}
                width={360}
              />
              </div>
              <div className="flex flex-col h-48 md:h-96 justify-center items-center align-middle space-y-8">
                <h2 className="text-xl md:text-3xl" >
                  Third year
                </h2>
                <Button variant="secondary" onClick={() => router.push(`/3`)}>Check now</Button>
              </div>
              </div>


              <div className='flex flex-col md:flex-row justify-center space-x-8 items-center shadow-md rounded-md p-2 w-full hover:shadow-lg'>
              <div className="flex flex-col h-48 md:h-96 justify-center items-center align-middle space-y-8">
                <h2 className="text-xl md:text-3xl md:ml-8" >
                  Fourth year
                </h2>
                <Button variant="secondary" onClick={() => router.push(`/4`)}>Check now</Button>
              </div>
              <div>
                <Image
                src="https://static.vecteezy.com/system/resources/previews/023/564/317/non_2x/hand-drawn-student-collage-illustration-free-png.png"
                alt="fourth"
                height={360}
                width={360}
              />
              </div>
              </div>
              </div>

          </div>
       </div>
       <div id="what-we-provide" className="flex flex-col justify-center gap-4 items-center my-6">
              <h4 className="font-extrabold text-xl text-center">What we provide</h4>
              <div className="flex flex-col w-4/5 space-y-2 text-sm mt-6">
                <p className="text-white sidebar-items bg-slate-900">
                  <Image 
                  src="/post-it.png"
                  alt="notes"
                  height={48}
                  width={48}
                  className="text-white"
                  />
                  Handwritten Notes</p>
                <p className="sidebar-items bg-slate-900">
                <Image 
                  src="/question.png"
                  alt="notes"
                  height={48}
                  width={48}
                  className="text-white"
                  />
                  Previous year Papers</p>
                <p className="sidebar-items bg-slate-900">
                <Image 
                  src="/youtube.png"
                  alt="notes"
                  height={48}
                  width={48}
                  className="text-white"
                  />
                  Must watch Youtube playlists</p>
                <p className="sidebar-items bg-slate-900">
                <Image 
                  src="/stack-of-books.png"
                  alt="notes"
                  height={48}
                  width={48}
                  className="text-white"
                  />
                  E-books</p>
                <p className="sidebar-items bg-slate-900">
                <Image 
                  src="/ppt.png"
                  alt="notes"
                  height={48}
                  width={48}
                  className="text-white"
                  />
                  Useful PPTs</p>
              </div>
            </div>
       <div id="about" className="contributors bg-slate-900 p-6 flex flex-col items-center justify-center border-t-blur">
          <p className="text-center text-2xl text-gray-200">Our contributors</p>
          <AnimatedTestimonials testimonials={testimonials} />
          <Footer />
       </div>
    </>
  )
}

export default page
