import React from 'react'
import { useReducer } from 'react'
import CartContext from './Cartcontext'


const defaultcart = {
  items: [],
  totalAmount: 0
}

const CartReducer = (state, action) => {

  if (action.type == 'Add_ITEMS') {

    const newTotalAmount = state.totalAmount + action.items.price * action.items.amount
    const existingCartItem = state.items.findIndex((i) => i.id == action.items.id)
    const existingCart = state.items[existingCartItem]
    let updatedItem;
    let updatedItems;

    if (existingCart) {
      updatedItem = {
        ...existingCart,
        amount: existingCart.amount + action.items.amount

      }
      updatedItems = [...state.items]

      updatedItems[existingCartItem] = updatedItem

    }

    else {
      updatedItems = state.items.concat(action.items)
    }

    if (action.type == "REMOVE") {
      const existingCartItem = state.items.findIndex((i) => i.id == action.id)
      const existingCart = state.items[existingCartItem]
      const newTotalAmount = state.totalAmount + existingCart.price
      let updatedItems;
      if (existingCart.amount == 1) {
        updatedItems = state.items.filter((i) => i.id != action.id)

      } else {

        let updatedItem = { ...existingCart, amount: existingCart.amount - 1 }

        updatedItems = [...state.items]

        updatedItems[existingCartItem] = updatedItem

      }

    }

    return {
      items: updatedItems,
      totalAmount: newTotalAmount
    }
  }

}



const CartProvider = (props) => {

  const [cartState, dispatchCart] = useReducer(CartReducer, defaultcart)

  const additem = (item) => {
    dispatchCart({ type: "Add_ITEMS", items: item })
  }
  const removeItem = (id) => {
    dispatchCart({ type: "REMOVE", id: id })
  }


  const Value = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: additem,
    removeItem: removeItem,
  }
  return (
    <CartContext.Provider value={Value}>{props.children}</CartContext.Provider>
  )
}

export default CartProvider