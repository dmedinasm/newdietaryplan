import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import logoFooter from "../assets/logowhitemini.png"

const Footer = () => {
  return (
   <footer className="bg-[#0C0C0C] h-[10vh] flex items-center justify-between px-8 py-4">
    <div className="flex items-center justify-between gap-4">
     <div className="bg-[#FFF] p-2 rounded-[50%] text-primary hover:text-[#000]">
     <a href="#"> <BsTwitterX /></a>
     </div>
     <div className="bg-[#FFF] p-2 rounded-[50%]  text-primary hover:text-[#000]">
     <a href="#"><BsLinkedin /></a>
     </div>
     <div  className="bg-[#FFF] p-2 rounded-[50%]  text-primary hover:text-[#000]">
      <a href="#"><BsGithub /></a>
     </div>
    </div>
      <div className="pl-[128px]">
        <img src={logoFooter} alt="logo footer" className="w-[45px]"/>
      </div>
    <p className="font-poppins text-[#FFF]">© Developed by dmedinadev</p>
  </footer>
  )
}

export default Footer