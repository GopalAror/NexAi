import React from 'react'
import home from "../assets/images/home-img.webp";
import Commonbtn from './Commonbtn'
import ellipis1 from "../assets/images/home-ellipis1.svg";
import ellipis2 from "../assets/images/home-ellipis2.svg";

const Home = () => {
    return (
        <div className='relative overflow-x-clip'>
            <img className='absolute z-0' src={ellipis1} alt="ellipis" />
            <img className='absolute right-0 top-[-20%] z-0' src={ellipis2} alt="ellipis" />
            <div className="max-w-[1180px] relative z-[1] md:pb-[72px] md:pt-[130px] px-3 mx-auto" id="home">
                <div className="flex flex-row flex-wrap -mx-3">
                    <div className="md:w-6/12 w-full pr-3 max-w-[612px]" data-aos="fade-right">
                        <img className='max-w-[612px] w-full' src={home} alt="home-img" />
                    </div>
                    <div className="md:w-6/12 w-full max-md:pt-8 pl-3 max-w-[517px] flex flex-col justify-end">
                        <h2 className='sm:pb-4 pb-2 text-[#02CDCF] ff-recharge font-bold text-[20px] sm:text-[30px] md:text-[40px] sm:leading-[40px] leading-[27px] md:leading-[50px]' data-aos="fade-left">Ai-Powered Home Assistant</h2>
                        <p className='opacity-70 text-white font-poppins font-normal leading-[25px] text-[13px] sm:text-[16px] pb-[6px]' data-aos="fade-left">Nexai is an advanced AI-powered home assistant that brings the future to your fingertips. With its ability to engage in natural, fluent conversations in over 15 languages,</p>
                        <p className='opacity-70 text-white font-poppins font-normal leading-[25px] text-[13px] sm:text-[16px] pb-[6px]' data-aos="fade-left">Nexai offers an incredibly futuristic experience. It can take the initiative to ask about your day, schedule meetings, provide timely reminders</p>
                        <p className='opacity-70 text-white pb-[20px] sm:pb-[40px] font-poppins font-normal leading-[25px] text-[13px] sm:text-[16px]' data-aos="fade-left">assist with cooking by suggesting ingredients, track your fitness and nutrition goals, and even handle bill payments.</p>
                        <div data-aos="fade-left">
                            <Commonbtn text="Learn More" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
