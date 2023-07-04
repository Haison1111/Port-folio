import { useEffect, useState } from 'react'
import LogoTilte from '../../assets/images/logo-s.png'
import './Home.scss'
import { Link } from 'react-router-dom'
import AnimatedLetter from "../AnimatedLetters/AnimatedLetters"
import Logo from "./Logo/Logo"

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [ 'o',  'n']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
     setTimeout(() => {
       setLetterClass('text-animate-hover')
    }, 5000)
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _8`}>i,</span>
           <br /> 
          <span className={`${letterClass} _9`}>I</span>
          <span className={`${letterClass} _10`}>'m</span>
          <img src={LogoTilte} alt="developer" />
          <AnimatedLetter letterClass={letterClass}
          strArray = {nameArray}
          idx={2} />
          <br />
          <AnimatedLetter letterClass={letterClass}
          strArray = {jobArray}
          idx={22} />
        </h1>
        <h2> Frontend Developer </h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo/>
    </div>
  )
}

export default Home
