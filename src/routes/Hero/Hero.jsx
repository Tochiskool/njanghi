import React,{ useState } from "react"
import image from "./Images/acn.jpeg"
import imageHero from "./Images/hero.jpeg"
import Navbar from '../Navbar/Navbar'
import "./Css/hero.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Hero = () => {
  const [display, setDisplay] = useState("none");

  const handleDisplay = ()=>{
    if(display === "none"){
      setDisplay("block")
    }else{
      setDisplay("none")
    }
  }
  return (
    <>
             <header className="header-primary">
                <div className="flexing">
                <a className="logo logo-primary">
                <img src={image} alt="Working desk"/>
                </a>        
                <div className='btn btn-primary btn-toggle-menu'>
                 <FontAwesomeIcon icon={faBars} />
                </div>
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