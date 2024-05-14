import React, { useState, useEffect } from "react";
import Hero from "../Hero/Hero";
import "./style.css";
import Footer from "../Footer";
import API from "../../utils/API";
import axios from "axios";
const Contact = () => {
  const url = "http://localhost:5173/contact/";
  const [label, setLabel] = useState({
    name: "",
    email: "",
    label: "",
    message: "",
  });
  const [contacts, setContacts] = useState([]);

  //Handle change
  const handleChange = (e) => {
    const newLabel = { ...label };
    newLabel[e.target.name] = e.target.value;
    setLabel(newLabel);
    console.log(newLabel);
  };
  //Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        name: label.name,
        email: label.email,
        label: label.label,
        message: label.message,
      })
      .then((res) => {
        console.log(res.label);
      });
    console.log(label);
  };
  // useEffect(() => {
  //   loadContacts();
  // }, []);

  // function loadContacts() {
  //   API.fetchContacts()
  //     .then((contacts) => {
  //       return setContacts(contacts);
  //     })
  //     .catch((err) => console.log(err));
  // }
  return (
    <>
      <Hero />
      <div className='container ' style={{ marginTop: "2rem" }}>
        <div className='row remove-gutter-xs'>
          <div className='formContainer'>
            <form onSubmit={handleSubmit}>
              <h1>
                CONTACT FORM{" "}
                <mark>
                  <em>work in progress</em>
                </mark>
              </h1>

              <fieldset disabled='disabled'>
                <legend>Send a message</legend>
                <div>
                  <div className='field'>
                    <label className='label'>Name</label>
                    <div className='control'>
                      <input
                        onChange={handleChange}
                        value={label.name}
                        name='name'
                        className='input'
                        type='text'
                        placeholder='Enter name...'
                      />
                    </div>
                  </div>
                  <div className='field'>
                    <label className='label'>Email</label>
                    <div className='control'>
                      <input
                        onChange={handleChange}
                        value={label.email}
                        name='email'
                        className='input'
                        type='email'
                        placeholder='Enter Email..'
                      />
                    </div>
                  </div>
                  <div className='field'>
                    <label className='label'>Label</label>
                    <div className='control'>
                      <input
                        onChange={handleChange}
                        value={label.label}
                        name='label'
                        className='input'
                        type='text'
                        placeholder='Intro.. please'
                      />
                    </div>
                  </div>
                  {/* <div className='field'>
                    <label className='label'>Label</label>
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
                  </div> */}
                  <div className='field'>
                    <label className='label'>Message</label>
                    <div className='control'>
                      <textarea
                        onChange={handleChange}
                        value={label.message}
                        name='message'
                        className='textarea'
                        placeholder='Textarea'
                      ></textarea>
                    </div>
                  </div>
                </div>
                <button
                  style={{
                    display: "block",
                    width: "50%",
                    margin: "0 auto",
                    marginTop: "0.5rem",
                  }}
                  className=' button is-primary is-dark'
                >
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <section>
            {contacts.map((person) => (
              <div>
                <h2>{person.name}</h2>
                <p>
                  I will reach back at the email you provided {person.email}
                </p>
              </div>
            ))}
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
