import React from 'react'
import Commonbtn from './Commonbtn'

const Header = () => {
    return (

        <div className="2xl:max-w-[1140px] xl:max-w-[1050px] max-w-[990px] px-3 lg:ml-[100px] xl:ml-[150px] max-sm:pt-[50px] grow w-full flex justify-center flex-col relative z-[2] overflow-x-clip">
            <h1 className='text-white ff-recharge leading-[35px] 2xl:pt-10 sm:leading-[55px] 2xl:leading-[75px] sm:text-[40px] text-[35px] xl:text-[60px] font-bold max-w-[577px]' data-aos="zoom-in"><span className='text-[#02CDCF]'>Nexai</span> is an advanced AI-powered home assistant</h1>
            <p className='!opacity-70 pb-[15px] sm:pb-[30px] xl:pb-[49px] text-white font-poppins font-normal leading-[25px] text-[13px] sm:text-[16px] pt-2 sm:pt-3' data-aos="zoom-in">Etiam viverra nec libero a. A id id tempus molestie sed. Fringilla odio.</p>
            <div data-aos="zoom-in" className='max-md:pb-10'>
                <Commonbtn text='Know More' />
            </div>
        </div>

    )
}

export default Header
