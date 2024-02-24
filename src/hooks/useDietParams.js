import { useEffect, useState } from "react"

export function useDietParams ({minCalories,maxCalories,dietHealth,allergiesCare}) {
  const[params, setParams] = useState({})
  useEffect(() =>{
    if(!(minCalories && maxCalories)) return
    const minCalBreakfastDinner = Math.floor(minCalories * 0.3)
    const maxCalBreakfastDinner = Math.ceil(maxCalories * 0.3)
    const minCalLunch = Math.floor(minCalories * 0.3)
    const maxCalLunch = Math.ceil(maxCalories * 0.3)
       setParams ({kcMin: minCalories, kcMax: maxCalories, kMinBr:minCalBreakfastDinner, kMaxBr: maxCalBreakfastDinner, kcMinLunch: minCalLunch, 
        kcMaxLunch: maxCalLunch, kcMinDin: minCalBreakfastDinner, kcMaxDin: maxCalBreakfastDinner, diet: dietHealth, allergy: allergiesCare})
  },[minCalories, maxCalories])

  return params
}