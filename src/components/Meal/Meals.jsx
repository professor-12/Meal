import React from 'react'
import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'
import { useModeContext } from '../../assets/Theme'
const Meals = () => {
  const {mode} = useModeContext()
  return (
    <div className={`${mode == "dark" ? "bg-zinc-800/50" : "bg-gray-200"}`}>
    <MealsSummary/>
    <AvailableMeals/>
    </div>
  )
}

export default Meals