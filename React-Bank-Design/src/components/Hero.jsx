import React from 'react'
import styles from '../style'
import {discount,robot} from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
   <section id='home' className={`${styles.paddingY} flex flex-col md:flex-row`}>
    {/* hero text */}
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      
        {/* discount text container */}
      <div className='flex justify-center items-center py-1 px-4 bg-discount-gradient rounded-[10px]
      mb-2 xs:w-full ss:w-fit'>
        <img src={discount} alt="discount" className={`w-8 h-8 mr-2`}/>
        <p className={`${styles.paragraph}`}>
          <span className='text-white mr-1'>20% 
          </span>DISCOUNT FOR <span className='text-white mr-1'>1 MONTH </span> ACCOUNT
        </p>
      </div>

      {/* Hero main tex */}
      <div className='flex flex-row justify between items-center w-full'>
        {/* Text */}
        <h1 className='flex-1  text-white  font-poppins font-semibold text-5xl leading-[75px] ss:leading-[100px]
        ss:text-[72px]'> 
          The Next <br className='hidden sm:block'/>
            <span className='text-gradient'>
               Generation 
            </span>{""}
        </h1>
        
        {/* Get started image */}
        <div className='hidden mr-0 md:mr-4 ss:flex'>
          <GetStarted/>
        </div>
      </div>

         {/* Payment Method */}
         <h1 className='text-white text-5xl  font-poppins font-semibold leading-[75px] w-full
         ss:leading-[100px] ss:text-[60px]'> 
          Payment Method
        </h1>
        
        <p className={`${styles.paragraph} mt-5 `}> 
          Our team of experts uses a methodology to identify <br />
           the credit cards most likely to fit
           your needs. <br />
            We examine annual percentage rates, annual fees.
        </p>
    </div>

    {/* hero image */}
    <div className={`flex flex-1 ${styles.flexCenter} my-10 md:my-0 relative `}>
      <img src={robot} alt="" className='w-[100%] h-[100%] z-[5]  relative' />
      
      {/* bg effects */}
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
      <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient'></div>
      <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'></div>
    </div>

    <div className={`ss:hidden ${styles.flexCenter} `}>
    <GetStarted/>
    </div>
   </section>
  )
}

export default Hero