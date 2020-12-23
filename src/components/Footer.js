import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodepen,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="Footer">
      <h1 className="footer-title">Contact Me</h1>
      <div className="footer-info">
        <div className="contact-info">
          <h3 className="contact-title">Around The Web</h3>
          <ul id="contact">
            <a
              className="contact-links"
              href="https://codepen.io/4umrmate"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faCodepen} />
            </a>
            <a
              className="contact-links"
              id="profile-link"
              href="https://github.com/4UMRMATE"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              className="contact-links"
              href="mailto:sich.mate@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
            </a>
            <a
              className="contact-links"
              href="https://www.linkedin.com/in/4umrmate/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </ul>
        </div>
        <div className="location-info">
          <h3 className="location-title">Location</h3>
          <p>Tbilisi, Georgia</p>
        </div>
      </div>
      <p className="copyright">&copy; Copyright 2020</p>
    </footer>
  );
}
