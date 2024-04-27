import React from 'react'
import image from "./Images/teddy.jpg"
import imageHero from "./Images/hero.jpeg"
import Navbar from '../Navbar'


const Hero = () => {
  return (
    <>
             <header className="background-primary header-primary">
                <div className="container header-primary">
                <a className="logo logo-primary">
                <img src={image} alt="Working desk"/>
                </a>
                <Navbar/>
                </div>
            </header>
            <section className="hero hero-primary bg-image">
                <img src={imageHero} />
                  <div className="container">
                      <div className="hero-body">
                          <h1 className="hero-title">Hero Primary Title Content</h1>
                          <h4 className="hero-subtitle">Hero Primary Subtitle Content</h4>
                          <button className="btn">Button Text</button>
                      </div>
                  </div>
            </section>
    </>
  )
}

export default Hero