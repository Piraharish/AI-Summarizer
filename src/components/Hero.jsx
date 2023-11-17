import { logo } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {

  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="logo" className="logo object-contain" />
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => window.open("https://linkedin.com/in/piraharish")}
            className="linkedin_btn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
          <button
            type="button"
            onClick={() => window.open("https://github.com/piraharish")}
            className="github_btn"
          >
            <FontAwesomeIcon icon={faGithub} />
          </button>
          <button
            type="button"
            onClick={() =>
              window.open("https://piraharish-portfolio.netlify.app")
            }
            className="portfolio_btn"
          >
            <FontAwesomeIcon icon={faExternalLinkAlt} />
          </button>
        </div>
      </nav>

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
