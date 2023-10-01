import React from 'react'
import { useContext } from 'react'
import MealItemForm from './MealItemForm'
import CartContext from '../../../Store/Cartcontext'
import { useModeContext } from '../../../assets/Theme'

const MealItem = (props) => {
    const {mode} = useModeContext()
    const ctx = useContext(CartContext)

    const addToCart = (amount) => {
        ctx.addItem({
            id: props.id,
            name:props.name,
            amount,
            price: props.price
        })
    }
    const price = `$${props.price}`
    return (
        <li className='space-y-2 py-2 p-5 border-b-2 flex justify-between items-center'>
            <div >
                <div className=''>
                    <h3 className='font-bold'>{props.name}</h3></div>
                <div className='font-italic'><i>{props.describe}</i></div>
                <div className='text-orange-600 font-bold'>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddTocart={addToCart}/>
            </div>
        </li>
        
    )
}

export default MealItem