import React  from "react";
import styles  from "./style"; 

// import {Stats,
//   Business,
//   Billing ,
//   CardDeal,
//   Testimonials,
//   Clients,
//   CTA,
//   Footer,Navbar,Hero} from './components'
import {Navbar,Stats,Hero,Business,Billing,CardDeal} from './components'

const App = ()=>{
  // document.body.style.overflowX = "hidden"
  // console.log(document.body.style);
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
              {/* <Testimonials/> */}
              
          </div>
        </div>


    </div>
  )
}

export default App;