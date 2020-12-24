import React, { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { TweenMax } from "gsap";

export default function Navbar() {
  const [mobileNavOn, setToggle] = useState(null);

  const toggleMobileNav = (e) => {
    if (e.nativeEvent.x < 768) {
      setToggle(!mobileNavOn);
      mobileNavOn
        ? TweenMax.to(navItems, 0.5, {
            display: "flex",
            opacity: "1",
            fontSize: "5vw",
            maxHeight: "25vh",
          })
        : TweenMax.to(navItems, 0.5, {
            display: "none",
            opacity: "0",
            fontSize: "0",
            maxHeight: "0",
          });
    }
  };

  let navBar = useRef(null);
  let navItems = useRef(null);
  useEffect(() => {
    TweenMax.to(navBar, 2, { opacity: 1, delay: 4 });
  });

  return (
    <nav className="Navbar" id="navbar" ref={(el) => (navBar = el)}>
      <div id="mobile-nav">
        <FontAwesomeIcon
          id="bar-icon"
          icon={faBars}
          onClick={toggleMobileNav}
        />
      </div>
      <ul className="nav-items" ref={(el) => (navItems = el)}>
        <li>
          <a
            className="nav-links"
            href="#welcome-section"
            onClick={toggleMobileNav}
          >
            About
          </a>
        </li>
        <li>
          <a className="nav-links" href="#projects" onClick={toggleMobileNav}>
            Projects
          </a>
        </li>
        <li>
          <a className="nav-links" href="#contact" onClick={toggleMobileNav}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
