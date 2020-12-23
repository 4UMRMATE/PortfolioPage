import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Footer from "./components/Footer";
import Category from "./components/Category";

// title, src, alt, projects [title, image, desc, tags, repo, page]
import pseudoDB from "./components/Database";

function App() {
  return (
    <div className="App">
      <header className="header" id="header">
        <Navbar />
      </header>
      <section id="welcome-section">
        <Intro />
      </section>
      <section id="projects">
        <h1 id="project-title">My Projects</h1>
        <div className="project-tile">
          {pseudoDB.map((item) => {
            return (
              <Category
                key={item.alt}
                title={item.title}
                src={item.src}
                alt={item.alt}
                color={item.color}
              />
            );
          })}
        </div>

        <a
          className="view-codepen"
          href="https://codepen.io/4umrmate/"
          target="_blank"
          rel="noreferrer"
        >
          View on <FontAwesomeIcon icon={faCodepen} />
          CodePen
        </a>
      </section>
      <Footer />
    </div>
  );
}

export default App;
