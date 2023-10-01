import React from 'react'
import meals from '../../../src/assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import { useModeContext } from '../../assets/Theme'
import {motion} from "framer-motion"

const Header = props => {
  const { mode, setmode } = useModeContext()
  const toggle = (mode) => {
    if (mode == "dark") setmode("light")
    else setmode("dark")
  }
  return (
    <>
      <div className='bg-red-800'>
        <nav className='mx-auto p-6 bg-red-800 container flex md:w-[80%] justify-between'>
          <h1 className=' text-white font-semibold text-3xl'>AfroMeals</h1>
          <HeaderCartButton onClick={props.onShowcart}></HeaderCartButton>
          <motion.div whileTap={{scale:1.4}} onClick={()=> {toggle(mode)}}  className='absolute right-0 rounded-xl p-2 cursor-wait text-white font-medium  text-sm  bg-black'> { mode }</motion.div>
        </nav>
        <div>
          <img src={meals} className='w-full object-cover h-[14rem]' alt='' />
        </div>
      </div>
    </>
  )
}

export default Header
