import React from "react";
import styles,{layout} from "../style";
import {features} from '../constants'
import Button from "./Button"

const FeatureCard = ({details,index}) =>{
    return(
        // feature container
        <div className={` flex flex-row p-6 rounded-[20px] 
         ${index !== features.length -1 ? 'mb-6':'mb-0'} feature-card`}>
            {/* img container */}
            <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                <img src={details.icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
            </div>

            {/* features description */}
            <div className="flex-1 flex flex-col ml-3 ">
                <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{details.title}</h4>
                <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>{details.content}</p>
            </div>
        </div>
    )
}
    


const Business = () =>{
    return(
        <section id="features" className={`${layout.section} `}>
            {/* Bussines text */}
            <div className={`${layout.sectionInfo} space-y-8 `}>
                <h2 className={`${styles.heading2} `}>
                    You do the business, <br className="hidden sm:block" /> we'll handle the money.
                </h2>
                <p className={`${styles.paragraph} max-w-[580px] `}>
                    With the right credit card, you can improve your financial life by building credit, 
                    earning rewards and saving money. But with hundreds of credit cards on the market.
                </p>
                <Button />
            </div>

            {/* Business features */}
            <div className={`${layout.sectionImg} flex-col max-w-lg`}>
                {features.map((feature,index) =>
                    <FeatureCard key={feature.id } details={feature} index={index}/>
                )}
            </div>
        </section>
    )
}


export default Business