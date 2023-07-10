import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/slogo2.png'
import './index.scss'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/home">
        <FontAwesomeIcon
          icon={faHome}
          color="#EEEEEE"
          fontFamily="Monoid"
          fontWeight={500}
        />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#EEEEEE" />
      </NavLink>
      <NavLink
        activeclassname="active"
        className="portfolio-link"
        to="/portfolio"
      >
        <FontAwesomeIcon icon={faSuitcase} color="#EEEEEE" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#EEEEEE" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a target="_blank">
          <FontAwesomeIcon icon={faLinkedin} color="#EEEEEE" />
        </a>
      </li>
      <li>
        <a target="_blank">
          <FontAwesomeIcon
            to="https://github.com/Haison1111"
            icon={faGithub}
            color="#EEEEEE"
          />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
