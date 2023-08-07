
import logo from "../Assets/logo2.png";

import "../styles.css";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

export default function Footer() {
  return (
      <footer>

        <div>
        <img className="logo" src={logo} alt="Little Lemon logo"/>
        </div>
        <nav className="siteMap">
          <ul className="leftLinks">
              <li><Link to="/" >Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/menu">Menu</Link></li>
          </ul>
          <ul className="rightLinks">
              <li><Link to="/booking">Reservations</Link></li>
              <li><Link to="/order">Order Online</Link></li>
              <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <p className="contacts">Copyright 2023 <br/> Little Lemon</p>
        <p className="contacts">Contact us at: <br/> littlelemon@mail.com <br/> 800-123-4567</p>
        <div className="socials">
          <p>Follow us on:</p>
          <div >
             {socials.map((social) =>
                <Link to={social.url} key={social.url}>
                  <FontAwesomeIcon className="socialIcons" icon={social.icon}/>
                </Link>
              )}
          </div>
        </div>

      </footer>
  );
}
