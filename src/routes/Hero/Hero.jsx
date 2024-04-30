import React,{ useState } from "react"
import image from "./Images/acn2.jpeg"
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
                <img className="round" src={image} alt="Working desk"/>
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
                          <h1 className="hero-title">Welcome to my Official Portfolio</h1>
                          <h4 className="hero-subtitle">Full stack web developer</h4>
                          <button className="btn">Text me</button>
                      </div>
                  </div>
            </section>
    </>
  )
}

export default Hero