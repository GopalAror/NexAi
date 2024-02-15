import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MySliders = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        arrows: false,
        autoplay: true,
        cssEase: 'linear',
        speed: 9500,
        autoplaySpeed: 600,
        pauseOnHover: false,
        swipeToSlide: false,
        responsive: [
            {
                breakpoint: 1580,
                settings: {
                    slidesToShow: 4.1,
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4.1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3.1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2.1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.1,
                }
            }
        ]
    }
    return (
        <div className='relative z-[1]'>
            <div className="max-w-[912px] mx-auto px-3 sm:pt-[140px] pt-[70px] md:pt-[200px] pb-[45px] sm:pb-[90px]">
                <h2 className='text-[#02CDCF] ff-recharge font-bold leading-[25px] sm:leading-[50px] text-center sm:text-[30px] text-[20px] md:text-[40px]'>NexAi does all this. And more.</h2>
                <p className='sm:pt-4 pt-2 text-white text-center font-poppins font-normal text-[13px] sm:text-[16px] leading-[20px] sm:leading-[25px] opacity-70 max-w-[997px]'>Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
            </div>
            <Slider {...settings} className='more'>
                <div className='ml-6'>
                    <div className="max-w-[340px] ml-6 px-3 min-h-[220px] bg-[#090909] rounded-[16px] flex items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29]">
                        <p className='ff-recharge font-bold text-[18px] sm:text-[24px] text-center leading-[38px] text-white max-w-[254px]'>NexAi, Turn on light</p>
                    </div>
                </div>
                <div className='ml-6'>
                    <div className="max-w-[340px] ml-6 px-3 min-h-[220px] bg-[#090909] rounded-[16px] flex items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29]">
                        <p className='ff-recharge font-bold text-[18px] sm:text-[24px] text-center leading-[38px] text-white max-w-[254px]'>NexAi, set alarm of 5:00 am</p>
                    </div>
                </div>
                <div className='ml-6'>
                    <div className="max-w-[340px] ml-6 px-3 min-h-[220px] bg-[#090909] rounded-[16px] flex items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29]">
                        <p className='ff-recharge font-bold text-[18px] sm:text-[24px] text-center leading-[38px] text-white max-w-[254px]'>NexAi, measure this table</p>
                    </div>
                </div>
                <div className='ml-6'>
                    <div className="max-w-[340px] ml-6 px-3 min-h-[220px] bg-[#090909] rounded-[16px] flex items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29]">
                        <p className='ff-recharge font-bold text-[18px] sm:text-[24px] text-center leading-[38px] text-white max-w-[254px]'>NexAi, Turn on music</p>
                    </div>
                </div>
                <div className='ml-6'>
                    <div className="max-w-[340px] ml-6 px-3 min-h-[220px] bg-[#090909] rounded-[16px] flex items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29]">
                        <p className='ff-recharge font-bold text-[18px] sm:text-[24px] text-center leading-[38px] text-white max-w-[254px]'>NexAi, Turn on light</p>
                    </div>
                </div>
            </Slider>
            <Slider rtl {...settings} className='more'>
                <div className='ml-6'>
                    <div className="max-w-[340px] ml-6 px-3 min-h-[220px] bg-[#090909] rounded-[16px] flex items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29]">
                        <p className='ff-recharge font-bold text-[18px] sm:text-[24px] text-center leading-[38px] text-white max-w-[254px]'>NexAi, measure this table</p>
                    </div>
                </div>
                <div className='ml-6'>
                    <div className="max-w-[340px] ml-6 px-3 min-h-[220px] bg-[#090909] rounded-[16px] flex items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29]">
                        <p className='ff-recharge font-bold text-[18px] sm:text-[24px] text-center leading-[38px] text-white max-w-[254px]'>NexAi, Turn on music</p>
                    </div>
                </div>
                <div className='ml-6'>
                    <div className="max-w-[340px] ml-6 px-3 min-h-[220px] bg-[#090909] rounded-[16px] flex items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29]">
                        <p className='ff-recharge font-bold text-[18px] sm:text-[24px] text-center leading-[38px] text-white max-w-[254px]'>NexAi, Turn on light</p>
                    </div>
                </div>
                <div className='ml-6'>
                    <div className="max-w-[340px] ml-6 px-3 min-h-[220px] bg-[#090909] rounded-[16px] flex items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29]">
                        <p className='ff-recharge font-bold text-[18px] sm:text-[24px] text-center leading-[38px] text-white max-w-[254px]'>NexAi, is the front door locked?</p>
                    </div>
                </div>
                <div className='ml-6'>
                    <div className="max-w-[340px] ml-6 px-3 min-h-[220px] bg-[#090909] rounded-[16px] flex items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29]">
                        <p className='ff-recharge font-bold text-[18px] sm:text-[24px] text-center leading-[38px] text-white max-w-[254px]'>NexAi, Turn on light</p>
                    </div>
                </div>
            </Slider>
            <Slider {...settings} className='more'>
                <div className='ml-6'>
                    <div className="max-w-[340px] ml-6 px-3 min-h-[220px] bg-[#090909] rounded-[16px] flex items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29]">
                        <p className='ff-recharge font-bold text-[18px] sm:text-[24px] text-center leading-[38px] text-white max-w-[254px]'>NexAi, Turn on TV</p>
                    </div>
                </div>
                <div className='ml-6'>
                    <div className="max-w-[340px] ml-6 px-3 min-h-[220px] bg-[#090909] rounded-[16px] flex items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29]">
                        <p className='ff-recharge font-bold text-[18px] sm:text-[24px] text-center leading-[38px] text-white max-w-[254px]'>NexAi, Turn on music</p>
                    </div>
                </div>
                <div className='ml-6'>
                    <div className="max-w-[340px] ml-6 px-3 min-h-[220px] bg-[#090909] rounded-[16px] flex items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29]">
                        <p className='ff-recharge font-bold text-[18px] sm:text-[24px] text-center leading-[38px] text-white max-w-[254px]'>NexAi, Turn of AC.</p>
                    </div>
                </div>
                <div className='ml-6'>
                    <div className="max-w-[340px] ml-6 px-3 min-h-[220px] bg-[#090909] rounded-[16px] flex items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29]">
                        <p className='ff-recharge font-bold text-[18px] sm:text-[24px] text-center leading-[38px] text-white max-w-[254px]'>NexAi, Lock the front door</p>
                    </div>
                </div>
                <div className='ml-6'>
                    <div className="max-w-[340px] ml-6 px-3 min-h-[220px] bg-[#090909] rounded-[16px] flex items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29]">
                        <p className='ff-recharge font-bold text-[18px] sm:text-[24px] text-center leading-[38px] text-white max-w-[254px]'>NexAi, Turn of AC.</p>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default MySliders
