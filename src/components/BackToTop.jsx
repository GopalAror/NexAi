import React, { useState } from "react";
import backtotop from "../assets/images/back-to-top.svg";
const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    window.addEventListener("scroll", toggleVisible);
    return (
        <div>
            <button className="group animate-bounce border-0 flex justify-center items-center w-[40px] h-[40px] rounded-lg  fixed right-[1.7%] bottom-[10px] z-30 transition-all ease-linear duration-300  hover:shadow-[1px_1px_5px_5px_white] "
                onClick={scrollToTop}
                style={{
                    display: visible ? "flex " : "none",
                }}
            >
                <img className="w-10 h-10" src={backtotop} alt="backtotop" />
            </button>
        </div>
    );
};

export default BackToTop;