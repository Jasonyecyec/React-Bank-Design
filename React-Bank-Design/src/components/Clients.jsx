import React from 'react'
import styles from '../style'
import {clients} from '../constants'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full `}>
        {clients.map(client =>(
           <div key={client.id} className ="flex-1 flex justify-center items-center sm:min-w-[192px] 
           min-w-[150px]">
              <img src={client.logo} alt="client-logo" className='sm:w-[192px] w-[130px] h-[70px]
              object-contain cursor-pointer'/>
           </div>
        ))}
      </div>  
    </section>
  )
}

export default Clients