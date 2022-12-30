import React from 'react'
import { feedback } from '../constants'
import styles  from '../style'
import FeedbackCard from './FeedbackCard'

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} ${styles.flexCenter} flex-col `}>
      {/* Background gradient */}
      <div className='absolute z-[0] w-[25%] h-[60%] right-[0] rounded-full blue__gradient'>
      </div>

      {/* TODO */}
      <div className='flex justify-between w-full items-center z-[1] flex-col relative
      mb-6 md:flex-row sm:mb-16'>
          <h1 className={`${styles.heading2}`}>
            What people are <br className='hidden sm:block'/> saying about us 
          </h1>

          <div className='w-full mt-6 flex md:justify-center md:mt-0'>
            <p className={`${styles.paragraph} max-w-[450px]`}>
            Everything you need to accept card payments and grow your business anywhere on the planet.
            </p>
          </div>
      </div>

      {/* Card container */}
      <div className='flex flex-wrap justify-center w-full feedback-container relative z-[1] 
     '>
          {feedback.map((card,index) =>(
              < FeedbackCard key={card.id} details={card}/>
          ))}
      </div>
    </section>
  )
}

export default Testimonials