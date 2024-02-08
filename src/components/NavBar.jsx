import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from './../assets/logoredmini.png'
const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-10">
        <div>
              <div className="flex items-center justify-center gap-2">
                  <img src={logo} alt="logo main" />
                  <div className="flex flex-col items-center">
                      <h1 className="font-dancing font-semibold text-primary text-[48px]">Dietary Planner</h1>
                      <h3 className="font-semibold text-primary">Get a Perfect Diet for You</h3>
                  </div>
                 
              </div>
        </div>
          <div className="flex font-bold font-poppins items-center justify-between gap-8">
              <NavLink to="/">
                  <p className="hover:text-primary">Home</p>
              </NavLink >
              <NavLink to="entry">
              <p className="hover:text-primary">Get a Dietary Plan!</p>
              </NavLink>
              <NavLink to="/contact">
              <p className="hover:text-primary">Feed Back Us</p>
              </NavLink>
          </div>
        
    </nav>
  )
}

export default NavBar