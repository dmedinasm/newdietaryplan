import { useEffect, useState } from "react"

export function useDietParams ({minCalories,maxCalories,dietHealth,allergiesCare}) {
  const[params, setParams] = useState({})
  const[error, setError] = useState(null) 
  useEffect(() =>{
    if(!(minCalories && maxCalories)) return
    if(!(/^(1[0-9]{3}|2[0-5][0-9]{2}|2600)$/.test(minCalories))){
      setError("Invalid value, Min values must be between 1000 and 2600 kcal")
      return
    }
    if(!(/^(1[4-9][0-9]{2}|2[0-9]{3}|3000)$/.test(maxCalories))){
      setError("Invalid value,Max values must be between 1400 and 3000 kcal")
      return
    }
    
    if(minCalories > maxCalories){
      setError("Invaild value,Max values must be greater than Min values")
      return
    }

    if((maxCalories - minCalories) < 400){
      setError("Minimum range difference must be 400 kcal")
      return
    }
   

    setError(null)

    //Distribution of calories in the day
    const minCalBreakfastDinner = Math.floor(minCalories * 0.1)
    const maxCalBreakfastDinner = Math.ceil(maxCalories * 0.3)
    const minCalLunch = Math.floor(minCalories * 0.3)
    const maxCalLunch = Math.ceil(maxCalories * 0.45)
    const minCalDinner = Math.floor(maxCalories * 0.2)
    const maxCalDinner = Math.ceil(maxCalories * 0.45)
       setParams ({kcMin: minCalories, kcMax: maxCalories, kMinBr:minCalBreakfastDinner, kMaxBr: maxCalBreakfastDinner, kcMinLunch: minCalLunch, 
        kcMaxLunch: maxCalLunch, kcMinDin: minCalDinner, kcMaxDin: maxCalDinner, diet: dietHealth, allergy: allergiesCare})
  },[minCalories, maxCalories, dietHealth, allergiesCare])
  console.log(params)
  return {params, error}
}