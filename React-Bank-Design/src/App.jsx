import React  from "react";
import styles  from "./style"; 


import {Navbar,Stats,Hero,Business,Billing,CardDeal,Testimonials,Clients,CTA,Footer} from './components'

const App = ()=>{

  return(
    // Body
    <div className="bg-primary w-full oveflow-hidden">

      {/* Navbar */}
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
              <Navbar/>
          </div>
        </div>

      {/* Hero section */}
        <div className={`bg-primary ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
              <Hero/>
          </div>
        </div>

      {/* Components */}
        <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
              <Stats/>
              <Business/>
              <Billing/>
              <CardDeal/>
              <Testimonials/>
              <Clients/>
              <CTA/>
     
          </div>
        </div>
        <Footer/>

    </div>
  )
}

export default App;