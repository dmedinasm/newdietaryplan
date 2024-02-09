import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../context/Context'
import { getDietKCal } from '../data/dietKCal'
import {useNavigate} from 'react-router-dom'
import { allergies } from '../data/allergies'
import { dietType } from '../data/dietType'
import { getPlanData } from '../fetch/PlanResult'
import Toastify from 'toastify-js'
const DataEntry = () => {
const[peso, setPeso] = useState(0)
const[altura, setAltura] = useState(0)
const {setMealsID} =  useContext(Context)
const [checkedIDDiet, setCheckedIDDiet] = useState([])
const [checkedIDAllergies, setCheckedIDAllergies] = useState([])
const[dietHealth, setDietHealth] = useState()
const[allergiesCare, setAllergiesCare] = useState([])
const navigate = useNavigate()

const planResult = async (params) => {
  try {
      const data = await getPlanData(
        params.kcMin,
        params.kcMax,
        params.kMinBr,
        params.kMaxBr,
        params.kcMinLunch,
        params.kcMaxLunch,
        params.kcMinDin,
        params.kcMaxDin,
        params.diet,
        params.allergy)
    setMealsID(data.flat());
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

  const handleSubmit = (e) => {
    e.preventDefault()
    if (/^[0-9]*$/.test(peso) && /^[0-9]*$/.test(altura)) {
      const IMC = (peso) / (altura / 100) ** 2
      const params = getDietKCal({IMC,dietHealth,allergiesCare})
      navigate("/plan")
      planResult(params)
    } else {
      Toastify({
        text: "Invalid value, enter values ​​between 0 and 9",
        className: "info",
        position: "center",
        style: {
          background: "#FB6356",
          color: "white",
        }
      }).showToast();
    }

  }
  
 const handleChangeDiet =  (e) =>{
  if(e.target.checked){
    setCheckedIDDiet([...checkedIDDiet,e.target.id])
  }else{
    setCheckedIDDiet(checkedIDDiet.filter(id => id != e.target.id))
  }
 }

 const handleChangeAllergies =  (e) => {
  if(e.target.checked){
    setCheckedIDAllergies([...checkedIDAllergies,e.target.id])
  }else{
    setCheckedIDAllergies(checkedIDAllergies.filter(id => id != e.target.id))
  }
 }

  useEffect(() => {
    if (!checkedIDDiet) return
    const diet = checkedIDDiet.map(val =>
      dietType.find(payload => payload.id === val)
    ).map(res => res.data)
   setDietHealth(diet)
  }, [checkedIDDiet])

  useEffect(() =>{
    if (!checkedIDAllergies) return
    const allergy = checkedIDAllergies.map(val =>
      allergies.find(payload => payload.id === val)
      ).map(resp => resp.data).flat()
      setAllergiesCare(allergy)
  },[checkedIDAllergies])

console.log(checkedIDDiet)
console.log(checkedIDAllergies)
console.log(dietHealth)
console.log(allergiesCare)

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-8 py-8 ">
        <h5 className="font-poppins font-bold text-[lg] text-primary">PERSONAL INFORMATION FOR DIETARY PLAN</h5>
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-2">
            <label htmlFor="weight" className="font-poppins font-bold">weigth(kg):</label>
            <input type="number" id="weight" onChange={(e) => setPeso(e.target.value)} required className="border border-primary outline-none focus:shadow-primary focus:shadow-sm rounded"></input>
          </div>
          <div className="flex items-center justify-center gap-2">
            <label htmlFor="height" className="font-poppins font-bold">height(cm):</label>
            <input type="number" id="height" onChange={(e) => setAltura(e.target.value)} required className="border border-primary outline-none focus:shadow-primary focus:shadow-sm rounded"></input>
          </div>
        </div>
        <div className="flex items-start justify-center gap-12">
          <div className="flex flex-col  justify-center pl-[64px]  ">
            <h1 className="font-poppins font-bold text-center mb-4">Diet Type:</h1>
            {
              dietType.map(value =>
                <div key={value.id} className="flex items-center justify-between w-[200px] mt-2" >
                  <label htmlFor={value.id} className="font-poppins font-semibold" >{value.name}</label>
                  <input type="checkbox" id={value.id} onChange={handleChangeDiet} />
                </div>)
            }
          </div>

          <div className="flex flex-col items-start justify-center pl-[64px]">
            <h1 className="font-poppins font-bold text-center mb-4">Allergies and Health Care:</h1>
            {
              allergies.map(value =>
                <div key={value.id} className="flex items-center justify-between w-[200px] mt-2">
                  <label htmlFor={value.id} className="font-poppins font-semibold">{value.name}</label>
                  <input type="checkbox" id={value.id} onChange={handleChangeAllergies}  />
                </div>
              )
            }
          </div>
        </div>

        <input type="submit" value="Submit" className="bg-primary font-poppins cursor-pointer py-2 px-8 text-[#FFF] rounded" />
      </form>
    </>
  )
}

export default DataEntry