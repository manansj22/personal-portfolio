import React from 'react';

import {
    FaYoutube,
    FaGithub,
    FaLinkedinIn,
    FaStackOverflow,
    FaInstagram,
} from "react-icons/fa";

import Section from "../shared/section";
import Logo from "../../images/Msj.png";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";


import "./style.scss";

const Footer = () => {
  return (
    <Section 
    background="dark"
    className="footer"
    >
      <div className="footer-content-wrapper">
        <div className="footer-logo">
            <img src={Logo} alt="Msj Dev" />
            </div>
            <ul className="footer-menu-items">
                <li className="footer-menu-item"
                onClick={() => scrollToSection("skills")}
                >
                    Skills
                </li>
                <li className="footer-menu-item"
                onClick={() => scrollToSection("portfolio")}
                >
                    Portfolio
                </li>
                <li className="footer-menu-item"
                onClick={() => scrollToSection("blogs")}
                >
                    Blog & Article
                </li>
                <li className="footer-menu-item"
                onClick={() => scrollToSection("contact")}
                >
                    Contact me
                </li>
            </ul>
            </div>  
        
    </Section>
  );
};

export default Footer;