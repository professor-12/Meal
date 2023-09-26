import React from 'react'
import ReactDOM  from 'react'



export const Modal = (props) => {
  return (
<>
    
        <div onClick={props.onHideCart} className='fixed z-10  bottom-0 inset-0 bg-black bg-opacity-30 flex justify-center h-[100vh] items-center'>
            {props.children}
        </div>
    
</>
  )
}


export default Modal
