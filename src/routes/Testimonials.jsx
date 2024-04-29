import { faGithub, faStaylinked } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Testimonials = () => {
  return (
  <>
     <section className='background-quinary'>
        <div className="container">
            <div className="row">
            <div className="media col-1-2">
              <div className="media-item">
              <FontAwesomeIcon icon={faStaylinked} rotation={90}  size="7x"/>
             </div>
                <div className="media-body">
                    <h4 className="media-heading">Vite</h4>
                    <p>Get ready for a development environment that can finally catch up with you.</p>
                    <button className="btn btn-primary"><Link className="btn btn-primary" to="https://vitejs.dev/">Vite</Link></button>
                </div>
              </div>
              <div className="media col-1-2">
              <div className="media-item">
              <FontAwesomeIcon icon={faGithub}  size="7x"/>
             </div>
                <div className="media-body">
                    <h4 className="media-heading">Github</h4>
                    <p>Get a detail on everything regarding this portfolio.</p>
                    <button className="btn btn-primary"><Link className="btn btn-primary" to="https://github.com/Tochiskool/njanghi">Github</Link></button>
                </div>
              </div>
            </div>
        </div>
  </section>
  </>
  )
}

export default Testimonials