import React from 'react'
import styles from '../style'
import {logo} from '../assets'
import { footerLinks,socialMedia } from '../constants'

const Footer = () => {
  return (
   
       <section id='footer' className={` ${styles.flexCenter} ${styles.paddingX} ${styles.paddingY} 
       flex-col bg-footer mt-10 `}>
        <div  className={`${styles.boxWidth}`}>
        <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>

<div className='flex-1 flex flex-col justify-start mr-10 '>
  <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-contain'/>
  <p className={`${styles.paragraph} max-w-[310px] mt-4`}>
    A new way to make the payments easy, reliable and secure.
  </p>
</div>

<div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap mt-10 md:mt-0 '>
  {footerLinks.map((footerlink,index) =>(
    <div  className="flex flex-col my-4 min-w-[150px] ss:my-0 ">
      <h4 className='text-white font-poppins font-medium text-[18px] leading-[27px] mb-4 '>
        {footerlink.title}
      </h4>

      <ul className='space-y-4 list-none'>
        {footerlink.links.map(link=>(
          <li key={link.name} className='font-poppins font-normal text-[16px] text-dimWhite
          leading-[24px] cursor-pointer hover:text-secondary '>
            {link.name}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
</div>

<div className='w-full flex justify-between items-center flex-col
pt-6 border-t-[1px] border-t-[#3F3E45] md:flex-row'>
<p className='text-dimWhite text-center font-poppins font-normal text-[18px] leading-[27px] mb-4 '>
  Copyright © 2021 HooBank. All Rights Reserved.
</p>

<div className='flex flex-row justify-center item-center mt-6 space-x-6 md:mr-5 md:mt-0 '>
  {socialMedia.map(social =>(
    <img key={social.id} src={social.icon} className={`w-[21px] h-[21px] object-contain
    cursor-pointer`}></img>
  ))}
</div>
</div>
        </div>
      
    </section>
  
   
  )
}

export default Footer