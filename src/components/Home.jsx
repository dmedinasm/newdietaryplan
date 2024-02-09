import React from 'react'
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const nav = useNavigate()
  const navigate = () =>{
    nav("/entry")
  }
  return (
    <section className="flex items-center justify-center bg-bgHome bg-cover h-[80vh] shadow-primary shadow-2xl">
      <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="font-dancing font-semibold text-[#FFFF] text-[48px] ">Dietary Planner</h1>
      <p className="font-poppins font-semibold text-[#FFFF]">Get a Perfect Diet for You</p>
      <button className="bg-[#FFFF] font-poppins py-5 px-8 text-primary rounded-[32px] font-bold mt-4" onClick={navigate}>GET A DIETARY PLAN!</button>
      </div>
     
    </section>
  )
}

export default Home