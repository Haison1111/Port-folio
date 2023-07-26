import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Portfolio.scss'
import Project from '../Project/Project'
import OversightImage from '../../assets/images/oversightimage-2.png'
import ShapeSite from "../../assets/images/shapesite.png"

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timer)
    }
  })

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div className="projects-container">
          <Project
            images={OversightImage}
            title="Oversight"
            link="https://oversight-hs.netlify.app/"
            descrition="The music web project that I have created for my portfolio is an innovative platform that utilizes Spotify's API where you can choose playlists, listen to music and provide users with a personalized music experience. The website showcases my skills in web development."
          />
          <Project
          link="https://shapesite.netlify.app/homepage.html" 
          title="Shapesite"
          images={ShapeSite}
          descrition="website that offers a comprehensive collection of user interfaces (UI) from various websites and web applications. It provides designers and developers with a platform to explore and get inspired by different UI designs. The website features a user-friendly interface, easy navigation, and a wide range of UI designs from different categories."
          />
          
        </div>
      </div>
      <Loader type="ball-zig-zag-deflect" />
    </>
  )
}

export default Portfolio
