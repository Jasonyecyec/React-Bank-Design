import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} bg-blue-gradient p-[2px] 
    w-36 h-36 cursor-pointer rounded-full`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-full h-full rounded-full`}>
        
        <div className={`${styles.flexStart} flex-row`}>
          <p className='font-poppins font-medium text-[18px] leading-6'>
            <span className='text-gradient'> Get</span>         
          </p>

          <img src={arrowUp} alt="arrowUp" className='w-[23px] h-[23px] object-contain'/> 
        </div>

          <p className='font-poppins font-medium text-[18px] leading-6'>
            <span className='text-gradient'> Started</span>         
          </p>

      </div>
    </div>
  )
}

export default GetStarted