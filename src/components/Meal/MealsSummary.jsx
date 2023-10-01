import React from "react";
import { useModeContext } from "../../assets/Theme";
import {motion} from "framer-motion"

const MealsSummary = () => {
    const {mode} = useModeContext()
    return (
        <motion.section initial={{y:20,opacity:.3}} whileInView={{y:0,opacity:1}} transition={{duration:.4 , type:"bounce"}}  className={`${mode == "dark" && "bg-zinc-800"} ${mode == "light" && "bg-gray-300/80" } relative   w-[100%] font-semibold text-center -top-20  md:w-[65%] lg:w-[40%] mx-auto p-6 rounded-xl ${mode == "dark" ? "text-white": "text-slate-800"} space-y-3 shadow-2xl shadow-black`}>
            <h2 className="font-bold text-4xl mb-5">Delicious Food, Delivered To You</h2>
            <p className={`${mode == "dark" ? "text-gray-200" : "text-slate-600"}`}>
                Choose your favorite meal from our broad selection of available meals
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p className={`${mode == "dark" ? "text-gray-200" : "text-slate-600"}`}>
                All our meals are cooked with high-quality ingredients, just-in-time and
                of course by experienced chefs! 
            </p>
        </motion.section>
    );
};

export default MealsSummary;