import React, { useState } from 'react'
import Products from '../components/Products'
import Buttons from '../components/Buttons'
import Navbar from '../components/Navbar'
import OffCanvas from '../components/Offcanvas'

export default function MenuPage() {
  const [counter, setCounter] = useState(0)

  const incrementCart = () => {
    setCounter(counter+1)
    console.log("Button is clicked")
  }
  return (
    <>
    <Navbar counter={counter} />
    <div className='container'>
      <Buttons />
      <Products incrementCart={incrementCart} />
      <OffCanvas />
    </div>
    </>
  )
}
