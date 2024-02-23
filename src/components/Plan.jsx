import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom'
import { Grid } from 'react-loader-spinner'
import { days } from '../data/days'
import DayPlan from './DayPlan'
import { useLoader } from '../hooks/use Loader'
import { useMeals } from '../hooks/useMeals'
const Plan = () => {
   const loading = useLoader()
  const { mealsId } = useContext(Context)
  const mealsRendered = useMeals({meals:mealsId})
  const navigation = useNavigate()
  console.log(mealsId)
 
  return (
    <>  
    <section className=" flex items-center justify-center py-8 ">
    {loading ?
           <div className="flex flex-col items-center justify-center h-[80vh] gap-8" >
            <p className="font-poppins font-bold text-[1.5rem] text-primary ">Loading Plan...</p>
           <Grid
             visible={true}
             height="80"
             width="80"
             color="#FB5849"
             ariaLabel="grid-loading"
             radius="12.5"
             wrapperStyle={{}}
             wrapperClass="grid-wrapper"
           />
         </div>
         :
         mealsRendered?.length < 21 
         ?
          <div className=" h-[80vh] flex items-center justify-center px-8 ">
            <div className="bg-primary py-5 px-12 flex flex-col items-center justify-center rounded-lg gap-4" >
              <p className="font-poppins font-semibold text-[#FFF] text-center">The 7-day diet plan could not be prepared. Please enter another set of values or check your internet connection.</p>
              <button onClick={() => navigation("/entry")} className="font-poppins font-semibold bg-[#FFF] text-primary py-2 px-8 rounded">Accept</button>
            </div>
          </div>
         :
        <div>
          <h1 className="font-poppins  text-primary text-[64px] text-center">7 days diet plan</h1>
          <div className="flex flex-col items-center justify-center ">

            {
              days.map((valor, index) => 
              <DayPlan key={index} day={valor} dataMeal={mealsRendered.slice(index * 3, index * 3 + 3)} />
              )
            }
          </div>
          <div className="flex items-center justify-center mt-6">
          <button onClick={() => navigation("/entry")} className="bg-primary font-poppins text-[#FFF]  py-4 px-8 rounded-md " >Get New Diet Plan!</button> 
          </div>    
        </div>}
    </section>
        

    </>
  )
}

export default Plan