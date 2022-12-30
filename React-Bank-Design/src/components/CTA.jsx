import React from 'react'
import styles from '../style'
import Button from './Button'


const CTA = () => {
  return (
    <section id='cta' className={`${styles.flexCenter} ${styles.padding} ${styles.marginY}
    flex-col bg-black-gradient-2 rounded-[20px] box-shadow sm:flex-row`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={`${styles.heading2} text-center sm:text-left`}>
        Let’s try our service now!
        </h2>
        <p className={`${styles.paragraph} w-full sm:max-w-[450px] mt-5 text-center sm:text-left`}>
        Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>

      <div className={`${styles.flexCenter} ml-0 mt-10 sm:mt-0 sm:ml-10 `}>
        <Button/>
      </div>
    </section>
  )
}

export default CTA