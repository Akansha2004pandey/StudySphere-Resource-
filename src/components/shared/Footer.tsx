import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 h-96 w-4/5 flex justify-center items-center rounded-lg'>
        <div className="footer-text items-center flex flex-col justify-evenly space-y-10">
            <div className='flex justify-center'>
            <h1 className='text-white text-2xl'>© 2025 ResourceCSE</h1>
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
            <div><p className='text-gray-300'>Privacy Policy | Terms & Conditions | Cookies</p></div>
        </div>
    </div>
  )
}

export default Footer