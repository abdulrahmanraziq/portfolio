import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import About from './About'
import Education from './Education'
import Experience from './Experience'
import Service from './Service'
import Portfolio from './Portfolio'
import Contact from './Contact'
import BackToTop from './BackToTop'

function App() {
  return (
    <>
      <div className="wrapper"> 
        <Sidebar/>
        <div className='content'>
          <MainContent/>
          <About/>
          <Education/>
          <Experience/>
          <Service/>
          <Portfolio/>
          <Contact/>
        </div>
      </div>
      <BackToTop/>
    </>
  )
}

export default App
