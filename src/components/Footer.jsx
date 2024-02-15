import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import logoFooter from "../assets/logowhitemini.png"
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const nav = useNavigate()
  const navigation =  () =>{
    nav("/")
  }
  return (
   <footer className="bg-[#0C0C0C] h-[20vh] lg:h-[15vh]  flex flex-col gap-4 justify-center sm:flex-row items-center sm:justify-between px-8 py-4">
    <div className="flex items-center justify-between gap-4">
     <div className="bg-[#FFF] p-2 rounded-[50%] text-primary hover:text-[#000]">
     <a href="https://twitter.com/dmedinas88" target='_blank'> <BsTwitterX /></a>
     </div>
     <div className="bg-[#FFF] p-2 rounded-[50%]  text-primary hover:text-[#000]">
     <a href="https://www.linkedin.com/in/dmedinasm/" target='_blank'><BsLinkedin /></a>
     </div>
     <div  className="bg-[#FFF] p-2 rounded-[50%]  text-primary hover:text-[#000]">
      <a href="https://github.com/dmedinasm" target='_blank'><BsGithub /></a>
     </div>
    </div>
    
    <p className="font-poppins text-[#FFF] text-[0.8rem]">© Developed by dmedinadev</p>
  </footer>
  )
}

export default Footer