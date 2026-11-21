import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import NavBar from './components/NavBar'
import Slider from './components/Slider'
import Order from './components/Order'
import cardInfo from './components/cardInfo'


function App() {
  

  return (
    <>
  <Nav/>
  <NavBar/>   
  <Slider/>
  <Order/>
  <cardInfo/>
    </>
  )
}

export default App
