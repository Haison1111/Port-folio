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
      <NavLink exact="true" activeclassname="active" to="/">
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
        <a
          target="_blank"
          href="https://www.linkedin.com/in/s%C6%A1n-h%E1%BA%A3i-9bb12827b/"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            color="#EEEEEE"
            to="https://www.linkedin.com/in/s%C6%A1n-h%E1%BA%A3i-9bb12827b/"
          />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://github.com/Haison1111"
          rel="noreferrer"
        >
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
