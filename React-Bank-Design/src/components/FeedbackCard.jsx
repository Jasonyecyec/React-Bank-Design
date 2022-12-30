import React from 'react'
import { quotes } from '../assets'
import styles from '../style'

const FeedbackCard = ({details}) => {
  return (
    <div className='flex jusfitfy-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] my-5
    md:mr-10 sm:mr-5 mr-0 feedback-card feature-card'>
      <img src={quotes} alt="qoutes" className='w-[42px] h-[27px] object-contain' />

      <p className='text-white font-poppins text-[18px] leading-[32px] font-normal my-10'>
        {details.content}
      </p>

      <div className='flex'>
        <img src={details.img} alt="img" className='w-[48px] h-[48px] rounded-full'/>
        <div className='flex flex-col ml-2 '>
          <h4 className='text-white font-poppins text-[20px] leading-[32px] font-semibold'>
            {details.name}
          </h4>
          <p className='text-dimWhite font-poppins text-[16px] leading-[24px] font-normal'>
            {details.title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard