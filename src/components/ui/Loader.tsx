import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative flex items-center justify-center">
      
        <div className="w-36 h-36 border-4 border-gray-700 border-t-[#2a7878] rounded-full animate-spin absolute"></div>

        
        <img
          src="/stack-of-books.png"
          alt="Loading..."
          className="w-20 h-20 object-contain drop-shadow-lg"
        />
      </div>
    </div>
  );
};

export default Loader;
