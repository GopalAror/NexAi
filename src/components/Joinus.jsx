import React from 'react'
import Commonbtn from './Commonbtn'
import ellipis1 from "../assets/images/join-ellipis1.svg";
import ellipis2 from "../assets/images/join-ellipis2.svg";
import ellipis3 from "../assets/images/join-ellipis3.svg";

const Joinus = () => {
    return (
        <div className='relative'>
            <img className='absolute z-0 left-0 top-[-40%]' src={ellipis1} alt="ellipis" />
            <img className='absolute z-0 right-0 top-0' src={ellipis2} alt="ellipis" />
            <img className='absolute z-0 right-0 top-[-40%]' src={ellipis3} alt="ellipis" />
            <div className='max-w-[1140px] relative z-[1] mx-auto px-3 flex max-md:flex-col max-md:gap-5 items-center justify-between pt-[80px] sm:pt-[150px]  md:pt-[240px] pb-[30px] sm:pb-[89px]' id="chat">
                <h2 className='text-[#FCFCFC] sm:text-[30px] text-[20px] md:text-[40px] max-md:text-center leading-[28px] md:leading-[52px] ff-recharge font-bold max-w-[517px]'>Ready to get started <span className='text-[#02CDCF]'>Talk to us Today</span> </h2>
                <Commonbtn text="Get Started" />
            </div>
        </div>
    )
}

export default Joinus
