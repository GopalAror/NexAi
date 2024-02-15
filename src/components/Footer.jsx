import React from 'react'
import fb from "../assets/images/fb.svg";
import twitr from "../assets/images/twitr.svg";
import telegram from "../assets/images/telegram.svg";

const Footer = () => {
    return (
        <div className='bg-[url(./assets/images/footer-bg.webp)] bg-full max-sm:bg-cover bg-no-repeat w-full h-full'>
            <div className="max-w-[1140px] mx-auto px-3 mt-[31px]">
                <div className="flex flex-row flex-wrap justify-between -mx-3 pb-[30px]">
                    <div className="md:w-6/12 w-full px-3 max-w-[356px] pt-14">
                        <a href='#' className='text-[#02CDCF] ff-recharge font-bold leading-[50px] text-[24px] sm:text-[28px]'>Nex<span className='text-white'>AI</span></a>
                        <p className=' text-white text-[13px] sm:text-base ff-recharge font-bold opacity-70 sm:pt-4'>Nullam viverra natoque amet et sed scelerisque viverra fringilla platea. Ullamcorper.</p>
                        <div className="flex items-center gap-3 pt-5">
                            <a className='hover:-translate-y-2 duration-500' href="https://www.facebook.com/" target='_blank'>
                                <img src={fb} alt="fb" />
                            </a>
                            <a className='hover:-translate-y-2 duration-500' href="https://twitter.com/i/flow/login" target='_blank'>
                                <img src={twitr} alt="twitr" />
                            </a>
                            <a className='hover:-translate-y-2 duration-500' href="https://web.telegram.org/k/" target='_blank'>
                                <img src={telegram} alt="telegram" />
                            </a>
                        </div>
                    </div>
                    <div className="md:w-6/12 w-full px-3 max-w-[395px] pt-[40px] md:pt-[90px]">
                        <div className='flex flex-row flex-wrap -mx-3 justify-between'>
                            <div className='w-6/12 px-3 max-w-[145px]'>
                                <p className='ff-recharge font-bold text-[15px] sm:text-[18px] leading-[21px] text-white'>Quick links</p>
                                <ul>
                                    <li className='pt-5'><a href="#" className="opacity-70 ff-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] hover:opacity-100 duration-500 text-white">Home</a></li>
                                    <li className='pt-5'><a href="#" className="opacity-70 ff-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] hover:opacity-100 duration-500 text-white">Features</a></li>
                                    <li className='pt-5'><a href="#" className="opacity-70 ff-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] hover:opacity-100 duration-500 text-white">Marketplace</a></li>
                                    <li className='pt-5'><a href="#" className="opacity-70 ff-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] hover:opacity-100 duration-500 text-white">Tokens</a></li>
                                    <li className='pt-5'><a href="#" className="opacity-70 ff-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] hover:opacity-100 duration-500 text-white">NexChat</a></li>
                                    <li className='pt-5'><a href="#" className="opacity-70 ff-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] hover:opacity-100 duration-500 text-white">About</a></li>
                                </ul>
                            </div>
                            <div className='w-6/12 px-3 max-w-[165px]'>
                                <p className='ff-recharge font-bold text-[15px] sm:text-[18px] leading-[21px] text-white'>Information's</p>
                                <ul>
                                    <li className='pt-5'><a href="#" className="opacity-70 ff-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] hover:opacity-100 duration-500 text-white">Contact</a></li>
                                    <li className='pt-5'><a href="#" className="opacity-70 ff-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] hover:opacity-100 duration-500 text-white">Phone</a></li>
                                    <li className='pt-5'><a href="#" className="opacity-70 ff-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] hover:opacity-100 duration-500 text-white">terms</a></li>
                                    <li className='pt-5'><a href="#" className="opacity-70 ff-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] hover:opacity-100 duration-500 text-white">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="border-t-2 w-full rounded-2xl opacity-40 border-[#FCFCFC]"></div>
                    <p className='text-white ff-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] opacity-70 text-center py-5'>@Copyright.nexai</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
