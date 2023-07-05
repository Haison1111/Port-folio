import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/S-logo2.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome,  faUser ,faSuitcase} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#EEEEEE" fontFamily='Monoid' fontWeight={500}/>
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
            <a target='_blank'  >
                <FontAwesomeIcon icon={faLinkedin} color='#EEEEEE' />
            </a>
        </li>
        <li>
            <a target='_blank'  >
                <FontAwesomeIcon icon={faGithub} color='#EEEEEE' />
            </a>
        </li>
    </ul>


  </div>
)

export default Sidebar
