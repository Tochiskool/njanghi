
import Features from "./routes/Features"
import Footer from "./routes/Footer"
import Hero from "./routes/Hero"
import Navbar from "./routes/Navbar"
import SlideShow from "./routes/SlideShow"
import Testimonials from "./routes/Testimonials"
import Welcometoday from "./routes/Welcometoday"

const App = () => {
  
  return ( 
    <>
    <Navbar/>
    <Hero/>
    <main>
            <Welcometoday/>
            <Features/>
            <Testimonials/>
            <SlideShow/>
             
    
            </main>
            <Footer/>
    </>
  )
}

export default App
