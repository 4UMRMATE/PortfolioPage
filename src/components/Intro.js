import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown } from "@fortawesome/free-solid-svg-icons";
import { TweenMax, Power3 } from "gsap";
import Tags from "./Tags";

export default function Intro() {
  let introDiv = useRef(null);
  let introTxt = useRef(null);
  let introSlider = useRef(null);
  let aboutPage = useRef(null);
  let aboutMe = useRef(null);
  let callForAction = useRef(null);
  let line = useRef(null);
  useEffect(() => {
    TweenMax.to(introTxt, 2, {
      y: 25,
      opacity: 1,
      ease: Power3.easeOut,
    });
    TweenMax.to(introSlider, 2, { y: "-100%", delay: 2, ease: Power3.easeOut });
    TweenMax.to(introDiv, 2, { y: "-100%", delay: 2, ease: Power3.easeOut });
    TweenMax.to(line, 3, { height: "75%", delay: 2 });
    TweenMax.to(aboutPage, 2, { y: 20, delay: 2 });
    TweenMax.to(aboutMe, 2, { y: 20, delay: 2 });
    TweenMax.to(callForAction, 2, { opacity: 1, delay: 4 });
  });

  return (
    <div className="Intro">
      <div
        className="intro-div"
        ref={(el) => {
          introDiv = el;
        }}
      >
        <span className="intro-txt" ref={(el) => (introTxt = el)}>
          <p className="intro-text">Hi there,</p>
          <p className="intro-text">Welcome to My Page</p>
        </span>
      </div>
      <div className="slider" ref={(el) => (introSlider = el)}></div>
      <div className="main-page">
        <div className="my-info">
          <div className="about-me" ref={(el) => (aboutMe = el)}>
            <div className="about-me-text">
              <h1>Hello World,</h1>
              <h1>
                I'm{" "}
                <a
                  className="my-link"
                  href="https://github.com/4UMRMATE"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mate Sichinava
                </a>
              </h1>
              <h2>Currently Interested with Web Development</h2>
              <h3 className="my-stack">
                Technologies that I have Some Experience With:
              </h3>
              <Tags
                tags={[
                  "html",
                  "css",
                  "js",
                  "git",
                  "linux",
                  "bootstrap",
                  "scss",
                  "react",
                  "npm",
                  "gsap",
                ]}
              />
            </div>
          </div>
          <span className="line" ref={(el) => (line = el)}></span>
          <div className="about-page" ref={(el) => (aboutPage = el)}>
            <h1>About</h1>
            <p>This Page was created using following technologies:</p>
            <Tags tags={["scss", "gsap", "react", "npm"]} />
          </div>
        </div>
        <div className="call-for-action" ref={(el) => (callForAction = el)}>
          <p className="welcome-text">Check out My Latest Work</p>
          <a className="welcome-link" href="#projects">
            <FontAwesomeIcon className="arrow" icon={faAngleDoubleDown} />
          </a>
        </div>
      </div>
    </div>
  );
}
