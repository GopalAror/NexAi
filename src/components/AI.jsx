import React from 'react'
import ai from "../assets/images/Ai.webp";
import Commonbtn from './Commonbtn'

const AI = () => {
    return (
        <div className='py-[50px] sm:py-[160px] mx-3 overflow-x-clip'>
            <div className='bg-[url(./assets/images/ai-bg.webp)] border rounded-[24px] mx-auto px-3 border-[#FCFCFC] bg-no-repeat bg-full max-w-[1340px] w-full ' id="about" >
                <div className="max-w-[1145px] py-8 px-3 mx-auto flex items-center justify-center min-h-[810px]">
                    <div className="flex flex-row -mx-3 flex-wrap ">
                        <div className="md:w-6/12 w-full px-3" data-aos="fade-right">
                            <h2 className='text-[#02CDCF] font-bold sm:text-[30px] text-[20px] md:text-[40px] leading-[50px] ff-recharge'>What is NexAi?</h2>
                            <p className='max-w-[564px] opacity-70 pt-2 sm:pt-4 text-[13px] sm:text-[16px] leading-[25px] text-white font-poppins font-normal'>Beyond its convenience, Nexai revolutionizes the way you interact with your home environment. It enhances productivity, efficiency, and overall well-being. From managing your schedules to transforming the way you experience smart living, Nexai opens up a world of possibilities.</p>
                            <p className='max-w-[564px] opacity-70 pt-2 text-[13px] sm:text-[16px] leading-[25px] pb-[20px] sm:pb-[40px] text-white font-poppins font-normal'>Nexai's software can be installed on all your smart devices, including smartphones, computers, smart TVs, and kitchen appliances. It acts as a centralized control hub, allowing you to manage and interact with all your devices seamlessly. Whether it's adjusting the temperature, turning on appliances, or even accessing files on your home computer from anywhere, Nexai empowers you with effortless control.</p>
                            <Commonbtn text="Learn More" />
                        </div>
                        <div className="md:w-6/12 w-full px-3 max-md:pt-8">
                            <img className='w-full max-md:rounded-full' data-aos="fade-left" src={ai} alt="ai" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AI
