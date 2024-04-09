import React from 'react'

import logo from "../../../images/Msj.png";
import CallToAction from '../../shared/CallToAction';
import { scrollToSection } from '../../utils/helpers';

import "./style.scss";


const Navigation = () => {
  return <div className="top-navigation-bar">
   
    <div className="app-logo">
      <img 
       src={logo} 
       alt="MSJ Dev"
       />
    </div>
    <div className="navigation">
      <span className="navigation-item" onClick={() => scrollToSection("skills")}>Skills</span>
      <span className="navigation-item" onClick={() => scrollToSection("portfolio")}>Portfolio</span>
      <span className="navigation-item" onClick={() => scrollToSection("blogs")}>Blogs & Article</span>
      <CallToAction text="Contact me" action={() => scrollToSection("contact")} />
    </div>
  </div> ;
};

export default Navigation