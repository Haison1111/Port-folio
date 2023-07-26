import React from 'react' 
import "./Project.scss"

const Project = ({images,title,link,descrition}) => {
  return (
    <div className='project-container'>
      <img src={images} alt = {title} href={link}/>
      <div className="project-info">
        <a href={link} > {title} </a>
        <p> {descrition} </p>
      </div>
    </div>
  )
}

export default Project