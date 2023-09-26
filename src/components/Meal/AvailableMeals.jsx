import React, { useEffect, useState } from 'react'
import Card from '../Ui/Card';
import MealItem from './MealItem/MealItem';



const AvailableMeals = () => {
    const [meals , setmeals] = useState([])
    const [loading , setLodaing] = useState(true)
    const [error ,setError] = useState(false)
    
    useEffect(() => {
        const handleFetch = async () => {

            const product  = await fetch('https://meals-973e4-default-rtdb.firebaseio.com/Meals.json')

            if (!product.ok) {
                throw new Error("Something went wrong")
            }
            const response = await product.json()


            const Meals = []

            for (const key in response) {
                Meals.push({
                    id:key , 
                    name: response[key].name ,
                    description: response[key].description,
                    price: response[key].price
                })

            }

            setmeals(Meals)
            setLodaing(false)

        }



            handleFetch().catch(error => {
                setLodaing(false)
                setError(error.message)
            })


    }, [])


    const measList = meals.map(meals =>
        <MealItem key={meals.id} name={meals.name} id={meals.id} describe={meals.description} price={meals.price}></MealItem>)
    return (
        <>
        {loading && <p className='bg-red-800 text-center p-4 text-white'>Loading...</p> }

            {
                !loading && !error &&
                <Card>
                    <div className=' mx-auto bg-white'>
                        <ul>
                            {measList}
                        </ul>
                    </div>
                </Card>
            }
            {
                error &&
                <p className='bg-red-800 text-center p-4 text-white'>
                    { error }
                </p>
            }



          {

          }
            
        </>
    )
}

export default AvailableMeals