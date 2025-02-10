import React from 'react'

const Loader = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex items-center space-x-2">
        <div className="w-16 h-16 border-4 border-t-4 border-gray-300 rounded-full animate-spin border-t-[#2a7878]"></div>
        
      </div>
    </div>
    </div>
  )
}

export default Loader
