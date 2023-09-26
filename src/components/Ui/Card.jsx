import React from 'react'

const Card = props => {
  return (
    <div className='bg-white lg:w-[70%] md:w-[1/2] mx-auto mb-30 rounded-lg p-5 shadow'>
        {props.children}
    </div>
  )
}

export default Card