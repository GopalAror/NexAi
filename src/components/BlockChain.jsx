import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ellipis1 from "../assets/images/chain-ellipis1.svg";
import ellipis2 from "../assets/images/chain-ellipis2.svg";
import ellipis3 from "../assets/images/chain-ellipis3.svg";
import ellipis4 from "../assets/images/chain-ellipis4.svg";
import ellipis5 from "../assets/images/chain-ellipis5.svg";

const BlockChain = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4.5,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1580,
                settings: {
                    slidesToShow: 3.1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1.1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='relative overflow-x-clip'>
            <img className='absolute z-0 left-0 top-[9%]' src={ellipis1} alt="ellipis1" />
            <img className='absolute right-0 top-[-30%] z-0 ' src={ellipis2} alt="ellipis1" />
            <img className='absolute right-0 top-0 z-0 ' src={ellipis3} alt="ellipis1" />
            <img className='absolute left-0 bottom-[-20%] z-0 ' src={ellipis4} alt="ellipis1" />
            <img className='absolute z-0 right-0 bottom-[-50%]' src={ellipis5} alt="ellipis1" />
            <div className="max-w-[1140px] relative z-[1] mx-auto px-3 pt-[70px] md:pt-[160px] container1">
                <div className='flex flex-col items-center'>
                    <h2 className='text-[#02CDCF] ff-recharge font-bold leading-[50px] text-center sm:text-[30px] text-[20px] md:text-[40px]'>Blockchain & AI technology</h2>
                    <p className='sm:pt-4 text-white opacity-70 text-center font-poppins font-normal text-[13px] sm:text-[16px] leading-[25px] max-w-[997px]'>Nexai is an advanced home assistant that will revolutionize the way we interact with our smart devices at home. Powered by sophisticated artificial intelligence, it leverages blockchain technology to offer a secure and efficient user experience.</p>
                    <p className='pt-[40px] sm:pt-[96px] pb-[25px] sm:pb-[60px] text-white ff-recharge font-bold text-[16px] sm:text-[20px] leading-[32px] text-center max-w-[684px]'>By building the software on blockchain, Nexai provides the following advantages</p>
                </div>
            </div>
            <div className='max-w-[100vw] sm:ml-[10%] md:ml-[10%] sm:pl-3'>
                <Slider className='hexa' {...settings}>
                    <div className='ml-5'>
                        <div className="bg-[url(./assets/images/Polygon-img.webp)] ml-5 bg-no-repeat bg-full max-w-[367px] min-h-[367px]">
                            <div className='flex flex-col items-center justify-center w-full min-h-[367px]'>
                                <div className="max-w-[58px] min-h-[58px] bg-[#040404] w-full rounded-full shadow-[0px_4px_16px_0px_#02CDCF99_inset]">
                                    <p className='ff-recharge text-[24px] sm:text-[32px] leading-[51px] text-white font-bold text-center'>1</p>
                                </div>
                                <h4 className='ff-recharge text-[16px] sm:text-[20px] leading-[32px] max-w-[212px] pt-[30px] text-white font-bold text-center'>Security and Privacy</h4>
                            </div>
                        </div>
                    </div>
                    <div className='ml-5 sm:translate-y-[30%]'>
                        <div className="bg-[url(./assets/images/Polygon-img.webp)] ml-5 bg-no-repeat bg-full max-w-[367px] min-h-[367px]">
                            <div className='flex flex-col items-center justify-center w-full min-h-[367px]'>
                                <div className="max-w-[58px] min-h-[58px] bg-[#040404] w-full rounded-full shadow-[0px_4px_16px_0px_#02CDCF99_inset]">
                                    <p className='ff-recharge text-[24px] sm:text-[32px] leading-[51px] text-white font-bold text-center'>2</p>
                                </div>
                                <h4 className='ff-recharge text-[16px] sm:text-[20px] leading-[32px] max-w-[212px] pt-[30px] text-white font-bold text-center'>Transparent and Reliable Data Management</h4>
                            </div>
                        </div>
                    </div>
                    <div className='ml-5'>
                        <div className="bg-[url(./assets/images/Polygon-img.webp)] ml-5 bg-no-repeat bg-full max-w-[367px] min-h-[367px]">
                            <div className='flex flex-col items-center justify-center w-full min-h-[367px]'>
                                <div className="max-w-[58px] min-h-[58px] bg-[#040404] w-full rounded-full shadow-[0px_4px_16px_0px_#02CDCF99_inset]">
                                    <p className='ff-recharge text-[24px] sm:text-[32px] leading-[51px] text-white font-bold text-center'>3</p>
                                </div>
                                <h4 className='ff-recharge text-[16px] sm:text-[20px] leading-[32px] max-w-[212px] pt-[30px] text-white font-bold text-center'>Self-learning and Personalization</h4>
                            </div>
                        </div>
                    </div>
                    <div className='ml-5 sm:translate-y-[30%]'>
                        <div className="bg-[url(./assets/images/Polygon-img.webp)] ml-5 bg-no-repeat bg-full max-w-[367px] min-h-[367px]">
                            <div className='flex flex-col items-center justify-center w-full min-h-[367px]'>
                                <div className="max-w-[58px] min-h-[58px] bg-[#040404] w-full rounded-full shadow-[0px_4px_16px_0px_#02CDCF99_inset]">
                                    <p className='ff-recharge text-[24px] sm:text-[32px] leading-[51px] text-white font-bold text-center'>4</p>
                                </div>
                                <h4 className='ff-recharge text-[16px] sm:text-[20px] leading-[32px] max-w-[212px] pt-[30px] text-white font-bold text-center'>Automated and Transparent Transactions</h4>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default BlockChain
