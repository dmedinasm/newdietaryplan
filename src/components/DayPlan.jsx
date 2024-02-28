import React from 'react'
import Meal from './Meal'
import breakfastImg from '../assets/tab-icon-01.png'
import lunchImg from '../assets/tab-icon-02.png'
import dinnerImg from '../assets/tab-icon-03.png'
const DayPlan = ({day,dataMeal}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="font-poppins font-bold mt-10 ">Day {day}</div>
        <div className="flex items-start justify-center mt-8 flex-wrap">
        {
          dataMeal.map((item, index) =>
            <div key={index} className="flex flex-col items-center justify-center gap-8">

              {
                index === 0
                  ?
                  <div>
                    <div className="font-poppins font-bold">Breakfast</div>
                    <div className="pt-2"><img src={breakfastImg} alt="iconBr" /></div>
                  </div>
                  : index === 1 ?
                    <div>
                     <div className=" font-poppins font-bold text-center">Lunch</div>
                       <div className="pt-2"><img src={lunchImg} alt="iconLunch" /></div>
                    </div>
                    : index === 2 ?
                      <div>
                        <div className="font-poppins font-bold text-center">Dinner</div>
                        <div className="pt-2"><img src={dinnerImg} alt="iconDinner" /></div>
                      </div>
                      : null
              }
              <Meal
                title={item.recipe.label}
                image={item.recipe.images.SMALL.url}
                carb={Math.floor(item.recipe.totalNutrients.CHOCDF.quantity)}
                fat={Math.floor(item.recipe.totalNutrients.FAT.quantity)}
                protein={Math.floor(item.recipe.totalNutrients.PROCNT.quantity)}
                link={item.recipe.url}
              />
            </div>

          )
        }
        </div>
       
      </div>
    </>
  )
}

export default DayPlan