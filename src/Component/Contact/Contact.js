import Loader from 'react-loaders'
import './Contact.scss'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import { useState, useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 5000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_rs8t77h',
        'template_br7bhxs',
        form.current,
        '6rBWqwMmOEAILyaMQ'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              idx={15}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', '', 'm', 'e']}
            />
          </h1>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name"  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="text"
                    name="email"
                    
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="gear-box">
          <div className="gearbox">
            <div className="overlay" />
            <div className="gear one">
              <div className="gear-inner">
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
              </div>
            </div>
            <div className="gear two">
              <div className="gear-inner">
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
              </div>
            </div>
            <div className="gear three">
              <div className="gear-inner">
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
              </div>
            </div>
            <div className="gear four large">
              <div className="gear-inner">
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-zig-zag-deflect" />
    </>
  )
}

export default Contact
