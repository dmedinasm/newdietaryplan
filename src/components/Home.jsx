import React from 'react'

const Home = () => {
  return (
    <section className="flex items-center justify-center bg-bgHome bg-cover h-[60vh] shadow-primary shadow-2xl">
      <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="font-dancing font-semibold text-[#FFFF] text-[48px] ">Dietary Planner</h1>
      <p className="font-poppins font-semibold text-[#FFFF]">Get a Perfect Diet for You</p>
      <button className="bg-[#FFFF] py-4 px-8 rounded-3xl font-bold">Get a Dietary Plan!</button>
      </div>
     
    </section>
  )
}

export default Home