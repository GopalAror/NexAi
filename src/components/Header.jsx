import React from 'react'
import Commonbtn from './Commonbtn'

const Header = () => {
    return (

        <div className="max-w-[1140px] px-3 mx-auto max-sm:pt-[50px] sm:grow w-full flex justify-center flex-col relative z-[2] overflow-x-clip">
            <h1 className='text-white ff-recharge leading-[35px] sm:leading-[50px] md:leading-[75px] sm:text-[40px] text-[25px] md:text-[60px] font-bold max-w-[577px]' data-aos="zoom-in"><span className='text-[#02CDCF]'>Nexai</span> is an advanced AI-powered home assistant</h1>
            <p className='!opacity-70 pb-[15px] sm:pb-[51px] text-white font-poppins font-normal leading-[25px] text-[13px] sm:text-[16px] pt-2 sm:pt-4' data-aos="zoom-in">Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla odio.</p>
            <div data-aos="zoom-in">
                <Commonbtn text='Know More' />
            </div>
        </div>

    )
}

export default Header
