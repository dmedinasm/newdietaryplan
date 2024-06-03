import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom'
import { Grid } from 'react-loader-spinner'
import { days } from '../data/days'
import DayPlan from './DayPlan'
import { useMeals } from '../hooks/useMeals'

const Plan = () => {
  const { mealsId } = useContext(Context)
  const { mealsRendered, loading, error } = useMeals({ meals: mealsId })
  const navigation = useNavigate()

  const isLoading = loading || mealsRendered.length < 21

  return (
    <section className="flex items-center justify-center py-8">
      {isLoading
        ? (
        <div className="flex flex-col items-center justify-center h-[80vh] gap-8">
          {error
            ? (
            <p className="font-poppins text-center  rounded-lg p-4  text-[1.5rem] text-[red]">{error}</p>
              )
            : (
            <>
              <p className="font-poppins font-bold text-[1.5rem] text-primary">Loading...</p>
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
            </>
              )}
        </div>
          )
        : (
        <div>
          <h1 className="font-poppins text-primary text-[40px] sm:text-[54px] text-center">7 days diet plan</h1>
          <div className="flex flex-col items-center justify-center">
            {days.map((valor, index) => (
              <DayPlan key={index} day={valor} dataMeal={mealsRendered.slice(index * 3, index * 3 + 3)} />
            ))}
          </div>
          <div className="flex items-center justify-center mt-6">
            <button onClick={() => navigation('/entry')} className="bg-primary font-poppins text-[#FFF] py-3 px-8 rounded-md">
              Get New Diet Plan!
            </button>
          </div>
        </div>
          )}
    </section>
  )
}
export default Plan
