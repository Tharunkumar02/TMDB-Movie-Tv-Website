import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          This is a Movie Database App. All the data is fetched from TMDB API. I do not own any of the content. This is a personal project to show my skills and is not intended for commercial use. If you want to know more about the Api or want to use it for your own project, you can visit TMDB website. Visit my GitHub profile to see the source code of this project.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a className="icon-link" href="https://github.com/Tharunkumar02" target="_blank"><span className="icon"><FaGithub /></span></a>
          </span>
          <span className="icon">
          <a className="icon-link" href="https://www.instagram.com/tharunreddie18/" target="_blank"><span className="icon"><FaInstagram /></span></a>
          </span>
          <span className="icon">
          <a className="icon-link" href="#" target="_blank"><span className="icon"><FaTwitter /></span></a>
          </span>
          <span className="icon">
          <a className="icon-link" href="https://www.linkedin.com/in/tharunkumar02/" target="_blank">
          <span className="icon"><FaLinkedin />
          </span></a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;