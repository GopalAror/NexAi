import React from 'react'

const Commonbtn = (props) => {
    return (
        <div>
            <button className='text-[14px] sm:text-[18px] ff-recharge leading-[21px] font-bold rounded-[12px] px-[20px]  sm:px-[32px] py-[15px] sm:py-[18px] bg-[#02CDCF] hover:shadow-[0px_5px_10px_5px_#02CDCF] hover:text-white duration-500'>{props.text}</button>
        </div>
    )
}

export default Commonbtn
