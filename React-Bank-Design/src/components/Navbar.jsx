import {useState} from 'react'
import {close, logo,menu} from '../assets'
import {navLinks} from '../constants'
import styles from '../style'

const Navbar = () => {

  const [toggle, setToggle] = useState(false)

  return (
   <nav className='w-full flex py-6 justify-between items-center navbar '>
      {/* Logo */}
      <div className='logo'>
        <img src={logo} alt="hoobank" className='w-28 md:w-32'/>
      </div>  

      {/* links */}
      <ul className={`hidden list-none flex justify-end items-center flex-1 text-white space-x-8
    sm:flex lg:space-x-12 ${styles.paragraph}`}>
      {navLinks.map((nav,index) => (
        <li key={nav.id}
            className = {`font-poppins cursor-pointer text-base font-light`}>
              <a href={`#${nav.id}`}>
                {nav.title}
              </a>
        </li>

        )) }
    </ul>

        {/* Mobile menu */}
      <div className='flex items-center justify-center sm:hidden '>
          <img src={toggle ? close : menu} 
          alt="menu"
          className='w-7 h-7 object-contain '
          // negate
          onClick={()=> setToggle ( toggle=> !toggle)}
           />

           <div className={`${toggle ? 'flex' : 'hidden'} bg-black-gradient absolute
            p-6 top-20 right-0 rounded-xl sidebar w-32 mx-4 my-2 w-36`}>

              <ul className='flex flex-col justify-center items-center space-y-5 flex-1 text-white'>
        {navLinks.map((nav,index) => (
          <li key={nav.id}
              className = {`font-poppins cursor-pointer text-base`}>
                <a href={`#${nav.id}`}>
                  {nav.title}
                </a>
          </li>

          )) }
      </ul>
           </div>
      </div>
   </nav>
  )
}


export default Navbar