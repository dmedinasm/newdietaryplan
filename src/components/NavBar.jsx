import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from './../assets/logoredmini.png'
import Hamburger from 'hamburger-react'

const NavBar = () => {
  const nav = useNavigate()
  const [isOpen, setOpen] = useState(false)
  const navigator = () => {
    nav ("/")
  }
  return (
    <nav className="flex items-center justify-between py-2 px-10 relative ">
        <div>
              <div className="flex items-center justify-center gap-2 cursor-pointer" onClick={navigator}>
                  <img src={logo} alt="logo main" />
                  <div className="flex flex-col items-center">
                      <h1 className="font-dancing font-semibold text-primary text-[48px] hidden sm:block">Dietary Planner Tool</h1>
                  </div>
                 
              </div>
        </div>
          <div className="flex font-bold font-poppins items-center justify-between gap-8 ">
            <div className="block lg:hidden ">
            <Hamburger toggled={isOpen} toggle={setOpen} />
            { isOpen ?
            <ul className="font-poppins bg-[gray] text-[white] text-[12px] sm:text-[1rem] flex flex-col items-start justify-center w-[40%] gap-8 p-8  absolute right-[5%] shadow-2xl">
              <li onClick={()=>setOpen(!isOpen)} className="hover:text-[lightgray]" ><NavLink to="/">Home</NavLink></li>
              <li onClick={()=>setOpen(!isOpen)} className="hover:text-[lightgray]"><NavLink to="/entry">Get a Dietary Plan!</NavLink></li>
              <li onClick={()=>setOpen(!isOpen)} className="hover:text-[lightgray]"><NavLink to="/contact">Feed Back Us!</NavLink></li>
            </ul>
                    :
                null     
            }
            
            </div>
              <NavLink to="/" className="hidden lg:block">
                  <p className="hover:text-primary">Home</p>
              </NavLink >
              <NavLink to="/entry" className="hidden lg:block">
              <p className="hover:text-primary">Get a Dietary Plan!</p>
              </NavLink>
              <NavLink to="/contact" className="hidden lg:block">
              <p className="hover:text-primary">Feed Back Us</p>
              </NavLink>
          </div>
        
    </nav>
  )
}

export default NavBar