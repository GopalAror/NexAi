import React from 'react'

const Loader = () => {
    return (
        <div>
            <div className='flex space-x-2 justify-center items-center bg-black h-full w-full fixed top-0 left-0'>
                <span className=' ff-recharge font-bold text-[30px] sm:text-[40px] text-center text-[#02CDCF]'>Nex<span className='text-white'>AI</span></span>
                <div className='h-3 w-3 bg-[#02cdcf] mt-5 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                <div className='h-3 w-3 bg-[#02cdcf] mt-5 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                <div className='h-3 w-3 bg-[#02cdcf] mt-5 rounded-full animate-bounce'></div>
            </div>
        </div>
    )
}

export default Loader
