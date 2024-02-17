import React from 'react'
import hand from "../assets/images/hand-img.webp";
import ellipis1 from "../assets/images/token-ellipis1.svg";
import ellipis2 from "../assets/images/token-ellipis2.svg";
import ellipis3 from "../assets/images/token-ellipis3.svg";
const Token = () => {
    return (
        <div className='relative overflow-x-clip'>
            <img className='absolute z-0 left-0 top-[-55%]' src={ellipis1} alt="ellipis" />
            <img className='absolute z-0 right-0 top-[-20%]' src={ellipis2} alt="ellipis" />
            <img className='absolute z-0 top-[-10%] right-0' src={ellipis3} alt="ellipis" />
            <div className="max-w-[1240px]  mx-auto px-3" id="token">
                <h2 className='text-[#02CDCF] relative z-[1] ff-recharge font-bold leading-[25px] sm:leading-[50px] text-center sm:text-[30px] text-[20px] md:text-[40px] pb-[25px] sm:pb-[47px]'>NexAI Token & utility</h2>
                <div className="flex flex-row flex-wrap justify-between -mx-3">
                    <div className="md:w-6/12 w-full flex items-center justify-center md:max-w-[571px] px-3">
                        <img className='w-full' data-aos="fade-right" src={hand} alt="hand" />
                    </div>
                    <div className="md:w-6/12 relative z-[1] w-full sm:max-w-[670px] px-3 h-[430px] flex justify-end scroll overflow-y-scroll mt-[63px]" data-aos="fade-left">
                        <ol className="relative  after:absolute after:w-[10px] after:sm:min-h-[1430px] after:max-[550px]:min-h-[1430px] after:min-h-[1150px] after:min after:top-0 after:bottom-0 after:left-[-1.5%] after:sm:left-[-8%] overflow-visible after:rounded-[15px] after:z-[1] after:bg-[#02CDCF]">
                            <li className="mb-14 ms-4">
                                <div className="absolute w-6 h-6 z-[2] bg-[#FCFCFC] rounded-full mt-[90px] sm:left-[-9.2%] -start-[13px] border border-[#fcfcfc]"></div>
                                <time className="mb-4 text-white ff-recharge font-bold text-[16px] sm:text-[24px] leading-[31px]">Purchasing Nexai Products</time>
                                <p className="mb-4 mt-4 text-[13px] sm:text-base font-normal font-poppins text-white opacity-70 max-w-[536px]">Nex AI tokens will be the primary currency for acquiring Nexai's extensive range of software solutions, hardware devices, including drones and sensors, and other smart home products available on the Nexai marketplace. Users can confidently make purchases using Nex tokens, enjoying the convenience and flexibility of a token-based payment system.</p>

                            </li>
                            <li className="mb-14 ms-4">
                                <div className="absolute w-6 h-6 z-[2] bg-[#FCFCFC] rounded-full mt-[90px]  sm:left-[-9.2%] -start-[13px] border border-[#fcfcfc]"></div>
                                <time className="mb-4 text-white ff-recharge font-bold text-[16px] sm:text-[24px] leading-[31px]">Accessing Exclusive Content</time>
                                <p className="mb-4 mt-4 text-[13px] sm:text-base font-normal font-poppins text-white opacity-70 max-w-[536px]">By holding Nex AI tokens, users will gain privileged access to exclusive content within the Nexai platform. These tokens will unlock premium features, advanced functionalities, and specialized services, enabling users to fully explore and enjoy the enhanced capabilities of Nexai's ecosystem.</p>
                            </li>
                            <li className="mb-14 ms-4">
                                <div className="absolute w-6 h-6 z-[2] bg-[#FCFCFC] rounded-full mt-[90px]  sm:left-[-9.2%] -start-[13px] border border-[#fcfcfc]"></div>
                                <time className="mb-4 text-white ff-recharge font-bold text-[16px] sm:text-[24px] leading-[31px]">Loyalty and Rewards</time>
                                <p className="mb-4 mt-4 text-[13px] sm:text-base font-normal font-poppins text-white opacity-70 max-w-[536px]">The Nexai ecosystem will feature a robust loyalty program, rewarding users with Nex AI tokens for their active engagement, ongoing participation, and dedicated usage of Nexai's products and services. Token holders will have the opportunity to redeem their accumulated rewards for discounts, incentives, or exclusive offers, fostering a strong sense of loyalty and encouraging continued involvement.</p>

                            </li>
                            <li className="mb-14 ms-4">
                                <div className="absolute w-6 h-6 z-[2] bg-[#FCFCFC] rounded-full mt-[90px]  sm:left-[-9.2%] -start-[13px] border border-[#fcfcfc]"></div>
                                <time className="mb-4 text-white ff-recharge font-bold text-[16px] sm:text-[24px] leading-[31px]">Participating in Governance</time>
                                <p className="mb-4 mt-4 text-[13px] sm:text-base font-normal font-poppins text-white opacity-70 max-w-[536px]">Nex AI token holders will play a vital role in the governance of the Nexai ecosystem. Through voting mechanisms, token holders will have a direct say in the decision-making process. They can express their opinions, vote on proposed changes or improvements, and actively contribute to shaping the future development and direction of the Nexai ecosystem.</p>

                            </li>
                            <li className="mb-14 ms-4">
                                <div className="absolute w-6 h-6 z-[2] bg-[#FCFCFC] rounded-full mt-[90px]  sm:left-[-9.2%] -start-[13px] border border-[#fcfcfc]"></div>
                                <time className="mb-4 text-white ff-recharge font-bold text-[16px] sm:text-[24px] leading-[31px]">Peer-to-Peer Transactions</time>
                                <p className="mb-4 mt-4 text-[13px] sm:text-base font-normal font-poppins text-white opacity-70 max-w-[536px]">Nex AI tokens will enable seamless peer-to-peer transactions within the Nexai community. Users will have the ability to exchange tokens with others for various purposes, such as purchasing pre-owned Nexai devices, engaging in token trading activities, or conducting value exchanges directly within the ecosystem, all with the utmost security and convenience.</p>

                            </li>
                            <li className="mb-14 ms-4">
                                <div className="absolute w-6 h-6 z-[2] bg-[#FCFCFC] rounded-full mt-[90px]  sm:left-[-9.2%] -start-[13px] border border-[#fcfcfc]"></div>
                                <time className="mb-4 text-white ff-recharge font-bold text-[16px] sm:text-[24px] leading-[31px]">Token Staking and Rewards</time>
                                <p className="mb-4 mt-4 text-[13px] sm:text-base font-normal font-poppins text-white opacity-70 max-w-[536px]">Nex AI tokens will support staking mechanisms, allowing users to lock up their tokens for a specified period. By staking their tokens, users will earn additional rewards, such as interest, dividends, or other incentives, further incentivizing token holding and fostering long-term engagement and loyalty.</p>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Token
