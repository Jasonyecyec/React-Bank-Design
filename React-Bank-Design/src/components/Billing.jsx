import React from "react";
import {apple,bill,google} from '../assets'
import styles,{layout} from "../style";

const Billing = () =>{
    return(
        <section id="billing" className={layout.sectionReverse}>
            {/* billing img container */}
            <div className={`${layout.sectionImgReverse}`}>
                <img src={bill} alt="" className="w-[100%] h-[100%] relative z-[5]" />

                {/* background  lighting*/}
                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full 
                white__gradient">
                </div>
                <div className="absolute z-[0] -left-1/2 right-0 w-[50%] h-[50%] rounded-full 
                pink__gradient">
                </div>
            </div>

            {/* billing info */}
            <div className={`${layout.sectionInfo} space-y-5 md:items-end `}>
                {/* header */}
                <h2 className={` ${styles.heading2} w-fit md:pr-6 `}>
                    Easily control your <br className="sm:block hidden"/> billing &  invoicing.
                </h2>
                
                {/* sub-text */}
                <p className={`${styles.paragraph} max-w-[470px]`}>
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque.
                 Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
                </p>

               
                <div className="flex justify-center  w-full flex-wrap sm:mt-10 md:pl-[148px] ss:justify-start ">
                    <img src={apple} alt="apple-play" className="w-[128px] h-[42px] object-contain
                     mr-5 cursor-pointer" />
                     <img src={google} alt="google-store" className="w-[128px] h-[42px] object-contain
                     mr-5 cursor-pointer" />
                </div>
            </div>
        </section>
    )
}

export default Billing