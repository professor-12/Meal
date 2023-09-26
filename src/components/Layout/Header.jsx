import React from 'react'
import meals from "../../../src/assets/meals.jpg"
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
    <>
        <div className='bg-red-800'>
            <nav className='mx-auto p-6 bg-red-800  flex w-[80%] justify-between'>
                <h1 className=' text-white font-semibold text-3xl'>ReactMeal</h1>
                <HeaderCartButton onClick = {props.onShowcart}></HeaderCartButton>
            </nav>
            <div>
                <img src={meals} className='w-full object-cover h-[14rem]' alt="" />
            </div>
        </div>
    </>
  )
}

export default Header;