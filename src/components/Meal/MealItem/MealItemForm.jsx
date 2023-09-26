import Input  from '../../Ui/Input'
import React, { useRef, useState } from 'react'

const MealItemForm = (props) => {
     const amount = useRef()
     const [validAmount ,setValidAmount] =  useState(true)


    const handleSubmit = (event) => {
        event.preventDefault()
        const enteredAmount = amount.current.value;
        const enteredAmountNumber = +enteredAmount

        if (enteredAmount.trim().length == 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
            setValidAmount(false)
            return;
        }
        setValidAmount(true)
        props.onAddTocart(enteredAmountNumber)
        console.log(enteredAmountNumber)
    }
    return (
        <form className='flex flex-col w-21 space-y-2' onSubmit={handleSubmit}>
            <Input ref={amount} label='Amount' input={{ id: 'amount_' + props.id  , type: 'number' , max: '5' , min: '1'}} />
            <button className='bg-orange-800 text-white px-4 rounded-2xl font-normal p-1'>+ Add</button>
            {!validAmount && <p> Please Enter a valid Amount</p>}
        </form>
    )
}

export default MealItemForm