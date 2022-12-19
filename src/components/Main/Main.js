import React from 'react'
import Navbar from '../Navbar/Navbar'


const Main = (props) => {
  const {children}=props
  return (
    <main>
        <Navbar/>
        <Card/> 
    </main>
  )
}

export default Main