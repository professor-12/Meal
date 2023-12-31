import React, { useContext, useState } from 'react'
import Modal from '../Ui/Modal/Modal'
import Card from '../Ui/Card'
import CartContext from '../../Store/Cartcontext'
import Cartitem from './Cartitem'
import Checkout from './Checkout'
import {motion} from 'framer-motion'

function Cart(props) {
 const  [ischeckout , setisCheckout] = useState(false)
  
  const ctx = useContext(CartContext)

  const totalAmount = `$${ctx.totalAmount.toFixed(2)}`

  const handleCartAdd = (item) => {
    ctx.addItem({...item , amount:1})
  }
  const handleCartRemove = (id) => {
    ctx.removeItem(id)
  }
  const orderHandler = () => {
    setisCheckout(true)
  }

  const modalActions = <div className='flex justify-end w-[95%] space-x-4'>
    <button
      className='border-2 hover:bg-orange-950 hover:text-slate-100 hover:border-orange-950 p-1 px-5 rounded-3xl border-orange-500 '
      onClick={props.onHidecart}
    >
      Close
    </button>
    {ctx.items.length > 0 && (
      <button onClick={orderHandler} className='bg-orange-500 rounded-3xl px-5 text-slate-50'>
        Order
      </button>
    )}
  </div>


  const submitOrderHandler = (userData) => {
    console.log(JSON.stringify({...userData}))
  fetch('http://127.0.0.1:8000/checkout/', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    header: "application/json",
    body: JSON.stringify({ ...userData })
  })
 
}


  return (
    <Modal>
      <motion.div exit={{y:-12,opacity:0}} animate={{y:12}} className='flex container md:w-[60%] space-y-5 lg:w-[40%] lg:px-[30px] lg:[40%] p-3 rounded-xl top-12 flex-col absolute  bg-white '>
        <div className='font-semibold text-lg max-h-[24rem] overflow-y-scroll'>
          <ul>
            {ctx.items.map((item) => (
              <Cartitem key={item.id} price={item.price} name={item.name} onRemove={handleCartRemove.bind(null, item.id)} onAdd={handleCartAdd.bind(null, item)} amount={item.amount}></Cartitem>
            ))}
          </ul>
        </div>
        <div className='flex font-bold text-2xl justify-between w-[90%]'>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>


        { ischeckout && <Checkout onConfirm={submitOrderHandler} onhide={props.onHidecart}/>}
        {!ischeckout && modalActions  }
       
      </motion.div>
    </Modal>
  )
}

export default Cart
