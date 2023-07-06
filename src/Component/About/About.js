import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import '../Layout/index.scss'
import { useState, useEffect } from 'react'
import { faCss3, faGithub, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import "./About.scss"
import Loader from 'react-loaders'


const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', '', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p></p>
        <p></p>
        <p></p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faCss3} />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} />
            </div>
        </div>
      </div>
    </div>
    <Loader type='ball-zig-zag-deflect' />
    </>
  )
}

export default About
