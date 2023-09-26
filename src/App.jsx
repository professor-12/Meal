import React, { useState } from 'react'
import Header from './components/Layout/Header'
import Meals from "./components/Meal/Meals"
import Cart from './components/Cart/Cart'
import CartProvider from './Store/CartProvider'
const App = () => {
  const [cartisShown , setCartisShown] =  useState(false)


  const onShowCart = () => {
    setCartisShown(true)
  }

  const onHideCart = () => {
    setCartisShown(false)
  }
  return (
    <CartProvider>
      <div>
      <Header onShowcart={onShowCart} ></Header>
      {cartisShown && <Cart onHidecart={onHideCart}/>}
       <main><Meals/></main>
       <br />
       </div>
    </CartProvider>
  )
}

export default App