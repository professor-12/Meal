import React from 'react'

const Input = React.forwardRef((props,ref) => {
  return (
    <div className='font-semibold space-x-2'>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} className='border-2 hover:outline-none' {...props.input} />
    </div>
  )
})

export default Input