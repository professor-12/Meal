import React, { useState } from 'react'
import Header from './components/Layout/Header'
import Meals from "./components/Meal/Meals"
import Cart from './components/Cart/Cart'
import CartProvider from './Store/CartProvider'
import ThemeProvider from './assets/Theme'
import { useModeContext } from './assets/Theme'
import { AnimatePresence } from 'framer-motion'
const App = () => {
  const {mode} = useModeContext()
  const [cartisShown, setCartisShown] = useState(false)
  
  const onShowCart = () => {
    setCartisShown(true)
  }
  const onHideCart = () => {
    setCartisShown(false)
  }
  return (
    <ThemeProvider>
    <CartProvider>
        <div className={`${mode == "light" ? "bg-slate-300" : "bg-zinc-800"}`}>
      <Header onShowcart={onShowCart} ></Header>
      <AnimatePresence>{cartisShown && <Cart onHidecart={onHideCart}/>}</AnimatePresence>
          <main><Meals /></main>
         
       <br />
       </div>
      </CartProvider>
      </ThemeProvider>
  )
}

export default App