import React from 'react'
import Welcometoday from './Welcometoday'
import Features from './Features'
import Testimonials from './Testimonials'
import SlideShow from './SlideShow'

const Wrapper = () => {
  return (
    <main>
       <Welcometoday/>
       <Features/>
       <Testimonials/>
       <SlideShow />
    </main>  
  )
}

export default Wrapper