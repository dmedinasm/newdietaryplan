import { useEffect, useState } from "react";
import { getMealsData } from "../fetch/mealsData";

export function useMeals ({meals}) {
    const [mealsRendered, setMealsRendered] = useState([])
    useEffect(() => {
        Promise.all(meals.map(getMealsData))
          .then(dataArray => setMealsRendered(dataArray));
      }, [meals]);
      
      console.log(mealsRendered)
      return mealsRendered
}