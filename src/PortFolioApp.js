import React from 'react'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Modal } from './components/Modal'
import { NavBar } from './components/NavBar'
import { Projects } from './components/Projects'
import { SocialMedia } from './components/SocialMedia'

export const PortFolioApp = () => {
  return (
    <div>
      <Modal/>
      <NavBar/>
      <div className="front">
        <div className="container">
          <Header/>
          <Experience/>
          <Projects/>
          <Contact/>
        </div>
          <Footer/>
      </div>
    </div>
  )
}
