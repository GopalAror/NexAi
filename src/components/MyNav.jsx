import React, { useState } from 'react'
import Commonbtn from './Commonbtn'

const MyNav = () => {
  const [navbar, setnavbar] = useState(false)
  function view() {
    setnavbar(!navbar)
    document.body.classList.toggle("max-md:overflow-hidden")
  }
  return (
    <div>
      <nav>
        <div className="2xl:max-w-[1130px] xl:max-w-[1050px] max-w-[990px] lg:ml-[100px] xl:ml-[130px] px-3">
          <div className="flex justify-between items-center w-full h-[80px] sm:h-[100px]">
            <a href='#' className='text-[#02CDCF] ff-recharge font-bold leading-[50px] text-[20px]'>Nex<span className='text-white'>AI</span></a>
            <ul className={`flex items-center gap-5 max-md:flex-col max-md:justify-center max-md:w-full max-md:h-full max-md:fixed max-md:top-0 z-[5] max-md:bg-[#040404] duration-700 ${navbar ? "right-0" : "right-[-100%]"}`}>
              <li><a className='font-poppins font-normal text-[16px] leading-[24px] text-white relative after:absolute after:hover:w-full after:w-0 after:h-[2px] after:left-0 after:duration-500 after:bottom-[-2%] after:rounded-2xl after:bg-[#02CDCF]' onClick={view} href="#home">Home</a></li>
              <li><a className='font-poppins font-normal text-[16px] leading-[24px] text-white relative after:absolute after:hover:w-full after:w-0 after:h-[2px] after:left-0 after:duration-500 after:bottom-[-2%] after:rounded-2xl after:bg-[#02CDCF]' onClick={view} href="#chain">Marketplace</a></li>
              <li><a className='font-poppins font-normal text-[16px] leading-[24px] text-white relative after:absolute after:hover:w-full after:w-0 after:h-[2px] after:left-0 after:duration-500 after:bottom-[-2%] after:rounded-2xl after:bg-[#02CDCF]' onClick={view} href="#about">About</a></li>
              <li><a className='font-poppins font-normal text-[16px] leading-[24px] text-white relative after:absolute after:hover:w-full after:w-0 after:h-[2px] after:left-0 after:duration-500 after:bottom-[-2%] after:rounded-2xl after:bg-[#02CDCF]' onClick={view} href="#chat">NexChat</a></li>
              <li><a className='font-poppins font-normal text-[16px] leading-[24px] text-white relative after:absolute after:hover:w-full after:w-0 after:h-[2px] after:left-0 after:duration-500 after:bottom-[-2%] after:rounded-2xl after:bg-[#02CDCF]' onClick={view} href="#token">Tokens</a></li>
            </ul>
            <div className='flex items-center gap-[15px]'>
              <Commonbtn text="Sign Up" />
              {navbar ? (<label className='flex-col cursor-pointer flex md:hidden relative z-[6]' onClick={view}>
                <span className='bg-[#02CDCF] rounded-xl rotate-45 w-[40px] h-[5px] mt-[6px] duration-500'></span>
                <span className='bg-[#02CDCF] rounded-xl top-0 absolute -rotate-45 w-[40px] duration-500 h-[5px] mt-[6px]'></span>
              </label>) : (<label className='flex-col cursor-pointer flex md:hidden relative z-[6]' onClick={view}>
                <span className='bg-[#02CDCF] rounded-xl w-[40px] h-[5px] mt-[6px] duration-500'></span>
                <span className='bg-[#02CDCF] rounded-xl w-[32px] h-[5px] mt-[6px] duration-500'></span>
                <span className='bg-[#02CDCF] rounded-xl w-[40px] h-[5px] mt-[6px] duration-500'></span>
              </label>)}
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default MyNav
