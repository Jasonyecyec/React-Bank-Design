import React from "react";
import {stats} from '../constants'
import styles from "../style";

const Stats = () =>{
    return(
        <section id="stats" className={`${styles.flexCenter}  flex-col ss:flex-row 
        flex-wrap mb-6 sm:mb-20`}>
                {stats.map((stat,index) =>
                    <div key={stat.id} className ={`flex flex-1 items-center justify-center m-3
                     ${index !== stats.length-1 ? "md:border-r-[1px]" : ''} w-full`}>
                        <h4 className="text-white font-poppins font-semibold text-2xl leading-[43px] xs:text-[40px]
                                        xs:leading-[53px] ">
                            {stat.value}
                        </h4>
                        <p className="font-poppins ml-3 font-normal text-2xl leading-[43px] text-gradient uppercase
                         xs:text-[20px] xs:leading-[53px]">
                            {stat.title}
                        </p>
                    </div>
                )}
              
        </section>
    )
}

export default Stats