import React from 'react'
import remote from "../assets/images/remote-svg.svg";
import real from "../assets/images/real-time.svg";
import natural from "../assets/images/natural.svg";
import intelligent from "../assets/images/intelligent.svg";
const Feature = () => {
    return (
        <div className='sm:px-[50px] px-2 pt-[75px] md:pt-[120px] overflow-x-clip'>
            <div className="w-full scroll relative z-[1] overflow-hidden bg-[url(./assets/images/unique-bg.webp)] rounded-[24px] border border-[#FCFCFC] max-w-[1340px] mx-auto h-[750px] bg-full bg-no-repeat  px-3" id="market">
                <div className="max-w-[1140px] relative py-2 px-3 w-full mx-auto">
                    <div className='md:py-[70px] sm:py-[40px] py-8 flex flex-col items-center'>
                        <h2 className='md:text-[40px] sm:text-[30px] text-[20px] ff-recharge text-[#FCFCFC] text-center  font-bold leading-[50px]' data-aos="zoom-in-down">Unique features</h2>
                        <p className='font-poppins font-normal opacity-70 text-[13px] sm:text-[16px] leading-[25px] text-center sm:pt-4 text-white max-w-[397px]' data-aos="zoom-in-down">ability to engage in natural, fluent conversations in over 15 languages,</p>
                    </div>
                    <div className="flex flex-row flex-wrap -mx-3 h-[485px] scroll overflow-y-scroll justify-between">
                        <div className=' w-full md:w-6/12 px-3 flex justify-start'>
                            <div className="max-w-[364px] h-[410px] rounded-[16px] bg-white px-6 pt-[30px] border border-white" data-aos="fade-right">
                                <img src={remote} alt="remote-svg" />
                                <p className='ff-recharge font-bold text-[16px] sm:text-[20px] leading-[20px] sm:leading-[32px] text-[#0B0A0A] pt-[30px] pb-[10px]'>Remote Access and File Management</p>
                                <p className='font-poppins font-normal text-[13px] sm:text-[16px] leading-[25px] opacity-70 text-[#0B0A0A]'> Imagine you're at work, and you realize you forgot to bring an important file stored on your desktop computer at home. No worries! Simply open the Nexai app on your phone, initiate a call with Nexai, and request access to your computer. </p>
                            </div>
                        </div>
                        <div className=' w-full md:w-6/12 px-3 flex justify-end mt-[5%] md:mt-[22%]'>
                            <div className="max-w-[364px] h-[410px] rounded-[16px] bg-white px-6 pt-[30px] border border-white" data-aos="fade-left">
                                <img src={real} alt="real-svg" />
                                <p className='ff-recharge font-bold text-[16px] sm:text-[20px] leading-[20px] sm:leading-[32px] text-[#0B0A0A] pt-[30px] pb-[10px]'>Real-time Home Monitoring</p>
                                <p className='font-poppins font-normal text-[13px] sm:text-[16px] leading-[25px] opacity-70 text-[#0B0A0A]'> While you're out with your family, you may wonder if you remembered to turn off the stove. Thanks to Nexai, this is no longer a concern. Using the Nexai app, you can initiate a video call with Nexai and activate the mini drone stationed in your home.  </p>
                            </div>
                        </div>
                        <div className=' w-full md:w-6/12 px-3 flex justify-start max-md:mt-[5%]'>
                            <div className="max-w-[364px] h-[410px] rounded-[16px] bg-white px-6 pt-[30px] border border-white">
                                <img src={natural} alt="natural-svg" />
                                <p className='ff-recharge font-bold text-[16px] sm:text-[20px] leading-[20px] sm:leading-[32px] text-[#0B0A0A] pt-[30px] pb-[10px]'>Autonomous and Natural Language Communication</p>
                                <p className='font-poppins font-normal text-[13px] sm:text-[16px] leading-[25px] opacity-70 text-[#0B0A0A]'> Nexai goes beyond standard home assistants by taking proactive initiatives and engaging in natural language conversations. It communicates with you as if you're talking to a friend,</p>
                            </div>
                        </div>
                        <div className=' w-full md:w-6/12 px-3 flex justify-end mt-[5%] md:mt-[22%]'>
                            <div className="max-w-[364px] h-[410px] sm:h-[450px] rounded-[16px] bg-white px-6 pt-[30px] border border-white">
                                <img src={intelligent} alt="intelligent-svg" />
                                <p className='ff-recharge font-bold text-[16px] sm:text-[20px] leading-[20px] sm:leading-[32px] text-[#0B0A0A] pt-[30px] pb-[10px]'>Intelligent Contextual Awareness</p>
                                <p className='font-poppins font-normal text-[13px] sm:text-[16px] leading-[25px] opacity-70 text-[#0B0A0A]'>Nexai utilizes the hardware sensors placed throughout your home to understand your location and deliver relevant information or actions. For instance, if you're in the bedroom, Nexai will automatically display on the TV screen.  </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Feature