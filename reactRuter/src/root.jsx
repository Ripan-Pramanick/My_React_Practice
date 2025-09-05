import React from 'react'
import Header from './component/headar/header.jsx'
import Footer from './component/footer/footer.jsx'

import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <>
      <Header />
      {/* This is where the matched child route will render */}
      <Outlet /> 
      
      <Footer />
    </>
  )
}

export default Root
