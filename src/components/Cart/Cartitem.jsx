import React from 'react'

const Cartitem = (props) => {
  return (
    <>
    <div className='border-b-2 border-orange-500 flex justify-between py-5 items-center'>
    <div className='flex flex-col space-y-2'>
        <h2>{props.name}</h2>
        
        <div className='flex space-x-3'>
            <span>${props.price}</span>
            <span className='px-2 border border-slate-400 rounded '>x {props.amount}</span>
        </div>
    </div>
    <div className='flex space-x-2 justify-end p-3 items-center'>
        <button onClick={props.onRemove} className='px-3 rounded border border-orange-500'>{props.onRemove} -</button>
        <button onClick={props.onAdd} className='px-3 rounded border border-orange-500'>{props.onAdd} +</button>
    </div>
    </div>

    </>
  )
}

export default Cartitem