import React from 'react'
import { useNavigate } from 'react-router-dom'
import homeImg from '../assets/home.jpg'
const Home = () => {
  const nav = useNavigate()
  const navigate = () =>{
    nav("/entry")
  }
  return (
    <section className="flex flex-col md:flex-row   items-center justify-center bg-bgHome bg-cover  shadow-primary gap-8 py-10 px-4 ">
      <div className="flex flex-col items-center order-2 md:order-1 gap-10 ">
        <h1 className="font-dancing font-semibold text-[#FFFF] text-[40px] lg:text-[48px] ">Dietary Planner Tool</h1>
        <div className="flex flex-col items-start justify-start gap-10">
          <p className="font-poppins font-semibold text-[#FFFF] text-center md:text-start text-sm lg:text-xl p-2">- Get a 7-day diet plan tailored to your specifications.</p>
          <p className="font-poppins font-semibold text-[#FFFF] text-center md:text-start text-sm lg:text-xl p-2">- Create a diet plan according to your goals,<br /> taking into account your medical condition or allergies</p>
          <p className="font-poppins font-semibold text-[#FFFF] text-center md:text-start text-sm lg:text-xl p-2">- Access to an extensive catalog of recipes on the web</p>
        </div>
        <button className="bg-[#FFFF] font-poppins py-4 px-6 lg:py-5 lg:px-8 text-primary rounded-[32px] font-bold mt-4" onClick={navigate}>GET A DIETARY PLAN!</button>
      </div>
      <img src={homeImg} alt="home's img" className="w-[60%] sm:w-[50%] md:w-[40%] order-1 md:order-2 rounded-lg shadow-2xl " />
    </section>
  )
}

export default Home