import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const nav = useNavigate()
  const navigate = () =>{
    nav("/entry")
  }
  return (
    <section className="flex  items-center justify-center bg-bgHome bg-cover h-[80vh] shadow-primary  ">
      <div className="flex flex-col items-center  gap-10 ">
        <h1 className="font-dancing font-semibold text-[#FFFF] text-[48px] ">Dietary Planner</h1>
        <div className="flex flex-col items-center justify-start gap-10">
          <p className="font-poppins font-semibold text-[#FFFF] text-start text-xl ">Get a 7-day diet plan tailored to your specifications.</p>
          <p className="font-poppins font-semibold text-[#FFFF] text-start text-xl">Create a diet plan according to your goals,<br /> taking into account your medical condition or allergies</p>
          <p className="font-poppins font-semibold text-[#FFFF] text-start text-xl">Access to an extensive catalog of recipes on the web</p>
        </div>
        <button className="bg-[#FFFF] font-poppins py-5 px-8 text-primary rounded-[32px] font-bold mt-4" onClick={navigate}>GET A DIETARY PLAN!</button>
      </div>

    </section>
  )
}

export default Home