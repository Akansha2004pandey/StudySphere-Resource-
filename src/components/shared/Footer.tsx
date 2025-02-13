import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 h-96 w-4/5 flex justify-center items-center rounded-lg'>
        <div className="footer-text items-center flex flex-col justify-evenly space-y-10">
            <div className='flex justify-center'>
            <h1 className='text-white text-md md:text-2xl'>© 2025 Study Sphere</h1>
            <Image src="/favicon.ico" height={24} width={24} alt="logo" />
            </div>
            <div>
                <Image
                src="https://res.cloudinary.com/dr7iepp6t/image/upload/v1686335119/venatus/other%20assets/nsut_feed7b.png"
                height={120}
                width={120}
                alt="logo"
                />
            </div>
            <div className='text-gray-300 md:text-lg text-sm flex flex-col md:flex-row align-middle items-center'>
              <p>Privacy Policy&nbsp;&nbsp;&nbsp;</p>
              <p>Terms & Conditions &nbsp;&nbsp;&nbsp;</p>
              <p>Cookies</p>
            </div>
        </div>
    </div>
  )
}

export default Footer