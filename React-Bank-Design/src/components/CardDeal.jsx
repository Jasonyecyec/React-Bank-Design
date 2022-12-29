import React from "react";
import {card} from '../assets'
import styles,{layout} from "../style";
import Button from "./Button";

const CardDeal = () =>{
    return(
       <section className={layout.section}>
        {/* card deal info */}
         <div className={`${layout.sectionInfo} `}>
            <h2 className={`${styles.heading2}`}>
                Find a better card deal <br className="hidden sm:block"/> in few easy steps.
            </h2>

            <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-10`}>
            Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>

            <Button />
         </div> 

         {/* card deal image  */}
         <div className={layout.sectionImg}>
            <img src={card} alt="card" className=" w-[100%]" />
         </div>
       </section>
    )
}

export default CardDeal;