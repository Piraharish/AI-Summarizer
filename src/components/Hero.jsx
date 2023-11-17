import { logo } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hero = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="w-24 md:w-32 lg:w-44" />
        <div className="hidden md:flex">
          <button
            type="button"
            onClick={() => window.open("https://linkedin.com/in/piraharish")}
            className="linkedin_btn"
          >
            Linked
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
          <button
            type="button"
            onClick={() => window.open("https://github.com/piraharish")}
            className="github_btn"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </button>
          <button
            type="button"
            onClick={() =>
              window.open("https://piraharish-portfolio.netlify.app")
            }
            className="portfolio_btn"
          >
            Portfolio <FontAwesomeIcon icon={faExternalLinkAlt} />
          </button>
        </div>
        <button type="button" className="block md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FontAwesomeIcon icon={faTimes} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="flex flex-col items-center">
          {/* Your menu items go here */}
          <button
            type="button"
            onClick={() => window.open("https://linkedin.com/in/piraharish")}
            className="linkedin_btn"
          >
            Linked
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
          <button
            type="button"
            onClick={() => window.open("https://github.com/piraharish")}
            className="github_btn"
          >
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </button>
          <button
            type="button"
            onClick={() =>
              window.open("https://piraharish-portfolio.netlify.app")
            }
            className="portfolio_btn"
          >
            Portfolio <FontAwesomeIcon icon={faExternalLinkAlt} />
          </button>
        </div>
      )}

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="gradient">SUM AI</span>
      </h1>
      <h2 className="desc">
        Harnessing the power of Rapid API, SUM AI enables users to effortlessly
        extract the core essence of complex texts, delivering precise summaries
        with remarkable accuracy.
      </h2>
    </header>
  );
};

export default Hero;
