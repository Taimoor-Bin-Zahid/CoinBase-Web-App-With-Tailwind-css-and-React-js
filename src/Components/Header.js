import React, { useState } from 'react';
import CoinBaseLogo from "../Assets/CoinBaseLogo.svg";

function App() {
 const [isOpen, setIsOpen] = useState(false);

 return (
   <nav className="flex items-center justify-between flex-wrap p-6 mb-[54.2px]">
     <div className="flex items-center flex-shrink-0 text-white mr-6 lg:mr-72 mt-[48px]">
       <img src={CoinBaseLogo} className="w-100 h-10 mr-2" alt="Logo" />
     </div>
     <div className="block lg:hidden mt-[57px]">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
       >
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
         </svg>
         <svg
           className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
           viewBox="0 0 20 20"
           xmlns="http://www.w3.org/2000/svg"
         >
           <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
         </svg>
       </button>
     </div>
     <div
       className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
     >
       <div className="text-sm lg:flex-grow mt-[57px] ml-[-95px]">
         <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4      h-21 ml-[1.47%] right-62.67%  font-bold text-[14px] text-[#333333] font-[poppins]">
           Home
         </a>
         <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4      h-21 ml-[7.87%] right-53.8%  font-bold text-[14px] text-[#333333] font-[poppins]">
           About Us
         </a>
         <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4      h-21 ml-[8.93%] right-46.93%  font-bold text-[14px] text-[#333333] font-[poppins]">
           Blog
         </a>
         <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-white-200 mr-4      h-21 ml-[6.53%] right-37.13%  font-bold text-[14px] text-[#333333] font-[poppins]">
           Contact Us
         </a>
       </div>
       <div className='mt-[54px]'>
         <button className="inline-flex items-center  w-157 h-54 left-1255 top-37 bg-gradient-to-r from-pink-500 to-indigo-800 rounded-full border-0 py-2 px-8 text-white">
           Login
         </button>
       </div>
     </div>
   </nav>
 );
}
export default App;