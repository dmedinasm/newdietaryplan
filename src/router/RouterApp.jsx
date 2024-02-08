import React from 'react'
import Home from '../components/Home'
import {Routes, Route} from 'react-router-dom'
import Plan from '../components/Plan'
import DataEntry from '../components/DataEntry'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Contact from '../components/Contact'
const RouterApp = () => {
  return (
    <>
    <NavBar/>
    <Routes>
        <Route path={'/'} element={<Home/>}  />
        <Route path={'/plan'} element={<Plan/>} />
        <Route path={'/entry'} element={<DataEntry/>}  />
        <Route path={'/contact'} element={<Contact/>}  />
    </Routes>
    <Footer/>
    </>
    
  )
}

export default RouterApp