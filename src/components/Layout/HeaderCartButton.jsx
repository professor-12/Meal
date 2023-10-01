import { useContext, useEffect, useState } from "react"
import CartIcon from "../Cart/Carticon"
import CartContext from "../../Store/Cartcontext"
import { motion } from "framer-motion"

const HeaderCartButton = (props) => {
  const [use,setuse] = useState([.5,1.12])
  const cst = useContext(CartContext)


  return (
    <motion.button  animate={{scaleX:use}} transition={{duration:.442}} onClick={props.onClick} className="flex bg-red-950 items-center rounded-2xl px-5 justify-between space-x-2">
        <span className="">
          <CartIcon />
        </span>
        <span className="font-semibold hidden md:flex tracking-tight text-white text-sm">Your Cart</span>
        <span>
          <div className="bg-orange-400 w-4 h-4 flex items-center justify-center text-white text-sm p-3 px-4 rounded-full">
            {cst.items.reduce((current,item)=> { return current + item.amount } , 0)}
          </div>
        </span>
    </motion.button>
  )
}

export default HeaderCartButton