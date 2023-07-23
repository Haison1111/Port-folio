import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import '../Layout/index.scss'
import { useState, useEffect } from 'react'
import {
  faCss3,
  faFigma,
  faGithub,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import './About.scss'
import Loader from 'react-loaders'
import figmaLogo from '../../assets/images/figma2.png'

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
          <p>
           Welcome to my portfolio! I am a front-end web developer with expertise in HTML, CSS,
            JavaScript, and React. My projects showcase my ability to create
            responsive and visually appealing websites that provide a seamless
            user experience.
          </p>
          <p>
            In addition to my technical skills, I also have experience in UI
            design using basic Figma. I believe that a well-designed website is
            just as important as its functionality.
          </p>
          <p>
            Communication is key, and I can communicate using English, which has proven
            to be incredibly useful when searching for solutions.
          </p>
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
              <img className="figma-logo" src={figmaLogo} />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-zig-zag-deflect" />
    </>
  )
}

export default About
