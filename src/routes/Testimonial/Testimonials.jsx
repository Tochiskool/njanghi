import { faGithub, faStaylinked } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Testimonials = () => {
  return (
  <>
     
        <div className="container">
            <div className="row">
            <div className="media col-1-2">
              <div className="media-item">
              <FontAwesomeIcon icon={faStaylinked} rotation={90}  size="7x"/>
             </div>
                <div className="media-body">
                    <h4 className="media-heading">Vite</h4>
                    <p>Get ready for a development environment that can finally catch up with you.</p>
                    <button className="btn"><Link to="https://vitejs.dev/">Learn</Link></button>
                </div>
              </div>
              <div className="media col-1-2">
              <div className="media-item">
              <FontAwesomeIcon icon={faGithub}  size="7x"/>
             </div>
                <div className="media-body">
                    <h4 className="media-heading">Github</h4>
                    <p>Please feel to examine my code and send comments. If you think I deserve to</p>
                    <button className="btn"><Link to="https://github.com/Tochiskool/njanghi">Learn</Link></button>
                </div>
              </div>
            </div>
        </div>
  </>
  )
}

export default Testimonials