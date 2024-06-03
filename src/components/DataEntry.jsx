import React, { useContext, useState } from 'react'
import { Context } from '../context/Context'
import { useNavigate } from 'react-router-dom'
import { allergies } from '../data/allergies'
import { dietType } from '../data/dietType'
import { useChecked } from '../hooks/useChecked'
import { useDietPlan } from '../hooks/useDietPlan'
import { useDietParams } from '../hooks/useDietParams'
const DataEntry = () => {
  const [minCalories, setMinCalories] = useState('')
  const [maxCalories, setMaxCalories] = useState('')
  const { setMealsID } = useContext(Context)
  const [checkedIDDiet, setCheckedIDDiet] = useState([])
  const [checkedIDAllergies, setCheckedIDAllergies] = useState([])
  const dietHealth = useChecked({ checkedType: checkedIDDiet, checkedList: dietType })
  const allergiesCare = useChecked({ checkedType: checkedIDAllergies, checkedList: allergies })
  const { params, error } = useDietParams({ minCalories, maxCalories, dietHealth, allergiesCare })
  const { planResult } = useDietPlan({ updateMealsID: setMealsID })
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (error) return
    if (!params) return
    planResult(params)
    navigate('/plan')
  }

  const handleChangeDiet = (e) => {
    if (e.target.checked) {
      setCheckedIDDiet([...checkedIDDiet, e.target.id])
    } else {
      setCheckedIDDiet(checkedIDDiet.filter(id => id != e.target.id))
    }
  }

  const handleChangeAllergies = (e) => {
    if (e.target.checked) {
      setCheckedIDAllergies([...checkedIDAllergies, e.target.id])
    } else {
      setCheckedIDAllergies(checkedIDAllergies.filter(id => id != e.target.id))
    }
  }
  console.log(checkedIDDiet)
  console.log(checkedIDAllergies)
  console.log(dietHealth)
  console.log(allergiesCare)

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-8 py-8 ">
        <h5 className="font-poppins font-semibold text-xl text-center text-primary">DIET PLAN SPECIFICATIONS</h5>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-4 sm:p-0">
          <div className="flex  items-center justify-center gap-2">
            <label htmlFor="minCalories" className="font-poppins font-bold">minimum caloric value(kcal):</label>
            <input type="number" id="minCalories" onChange={(e) => setMinCalories(e.target.value)} value={minCalories} required className="border border-primary outline-none focus:shadow-primary font-poppins text-center w-[100px] focus:shadow-sm rounded"></input>
          </div>
          <div className="flex items-center justify-center gap-2">
            <label htmlFor="maxCalories" className="font-poppins font-bold">maximum caloric value(kcal):</label>
            <input type="number" id="maxCalories" onChange={(e) => setMaxCalories(e.target.value)} value={maxCalories} required className="border border-primary outline-none focus:shadow-primary font-poppins w-[100px] text-center focus:shadow-sm rounded"></input>
          </div>
        </div>
        {error && <p className="text-[red] font-poppins text-center  text-bold px-4">{error}</p>}
        <div className="flex flex-col mr-10 sm:mr-0 sm:flex-row items-start justify-center mt-4 ml-0 lg:ml-12 mb-6 gap-12">
          <div className="flex flex-col  justify-center pl-[64px] mr-0 md:mr-12  ">
            <h1 className="font-poppins font-bold text-center mb-4">Diet Type:</h1>
            {
              dietType.map(value =>
                <div key={value.id} className="flex items-center justify-between w-[200px] mt-2" >
                  <label htmlFor={value.id} className="font-poppins font-semibold" >{value.name}</label>
                  <input type="checkbox" id={value.id} onChange={handleChangeDiet} className="outline-none" />
                </div>)
            }
          </div>

          <div className=" flex flex-col items-center justify-center pl-[64px]">
            <h1 className="font-poppins font-bold text-center mb-4">Allergies and Health Care:</h1>
            <div className="grid  grid-cols-1 lg:grid-cols-2 ">
            {
              allergies.map(value =>
                <div key={value.id} className="flex items-center justify-between w-[200px] mt-2 mr-12">
                  <label htmlFor={value.id} className="font-poppins font-semibold">{value.name}</label>
                  <input type="checkbox" id={value.id} onChange={handleChangeAllergies} />
                </div>
              )
            }
            </div>

          </div>
        </div>

        <input type="submit" value="Submit" className="bg-primary font-poppins cursor-pointer py-2 px-8 text-[#FFF] rounded-md" />
      </form>
    </>
  )
}

export default DataEntry
