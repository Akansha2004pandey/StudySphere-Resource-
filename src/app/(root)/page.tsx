import { BackgroundBoxesDemo } from '@/components/shared/BackgroundBoxes'
import React from 'react'
import { WobbleCard } from '@/components/ui/wobble-card'
import { ThreeDCardDemo } from '@/components/shared/AboutTheDevs'

const page = () => {
  return (
    <>
       <BackgroundBoxesDemo />
       <h1 className='text-3xl text-blue-950 font-extrabold mt-28 text-center'>Currently we cater...</h1>
       <div className="year-containers flex p-4 mt-12">
        <WobbleCard containerClassName="col-span-1 min-h-[300px] m-6">
            <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              First year
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              If someone yells “stop!”, goes limp, or taps out, the fight is over.
            </p>
            <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[6px_6px_0px_0px_rgba(0,0,0)] transition duration-200">Check now</button>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] m-6">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Second year
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            If someone yells “stop!”, goes limp, or taps out, the fight is over.
          </p>
          <button className="px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">Check now</button>
      </WobbleCard>
       </div>
       <ThreeDCardDemo />
    </>
  )
}

export default page
