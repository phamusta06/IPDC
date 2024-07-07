import { useState } from 'react'
 
import './App.css'
import Header from './component/Header'
import Dream from './pages/deam/Dream'
import Experience from './pages/experience/Experience'
import Business from './pages/business/Business'
import Finance from './pages/finance/Finance'
import Service from './pages/service/Service'
import Result from './pages/result/Result'
import Newsletter from './pages/newsletter/Newsletter'
import Footer from './component/Footer'


function App() {
 

  return (
    <div className='w-full overflow-hidden '>
      <Header/>
       <Dream/> 
      <Experience/>
      <Business/>
      <Finance/>
      <Service/>
      <Result/>
      <Newsletter/>
      <Footer/>


    </div>
  )
}

export default App
