import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../data/FoodData'

const FoodItems = () => {
  return (
    <div className=' flex flex-wrap gap-3 my-8 items-center justify-center '>
        {FoodData.map((food) => {
            return <FoodCard
             key={food.id} 
             id={food.id}
             name={food.name}
             img={food.img}
             price={food.price}
             desc={food.desc}
             rating={food.rating}
             
             />
        })}
      
    </div>
  )
}

export default FoodItems
