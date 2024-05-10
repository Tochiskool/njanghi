import React from "react";
import Hero from "../Hero/Hero";
import "./style.css";
import Footer from "../Footer";
const Contact = () => {
  return (
    <>
      <Hero />
      <div className='container' style={{ marginTop: "2rem" }}>
        <div className='row'>
          <div className='formContainer'>
            <form action=''>
              <h1>CONTACT FORM</h1>
              <fieldset>
                <legend>Send a message</legend>
                <div>
                  <div className='field'>
                    <label className='label'>Name</label>
                    <div className='control'>
                      <input
                        className='input'
                        type='text'
                        placeholder='Enter name...'
                        required
                      />
                    </div>
                  </div>
                  <div className='field'>
                    <label className='label'>Email</label>
                    <div className='control'>
                      <input
                        className='input'
                        type='email'
                        placeholder='Enter Email..'
                        required
                      />
                    </div>
                  </div>
                  <div className='field'>
                    <label className='label'>Subject</label>
                    <div className='control'>
                      <div className='select'>
                        <select>
                          <option>Select dropdown</option>
                          <option>HR</option>
                          <option>CEO</option>
                          <option>Friend</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='field'>
                    <label className='label'>Message</label>
                    <div className='control'>
                      <textarea
                        className='textarea'
                        placeholder='Textarea'
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
