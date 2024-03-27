import React from 'react'

import logo from "../../../images/Msj.png";
import CallToAction from '../../shared/CallToAction';

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
      <span className="navigation-item">Skills</span>
      <span className="navigation-item">Portfolio</span>
      <span className="navigation-item">Blogs & Article</span>
      <CallToAction text="Contact me" />
    </div>
  </div> ;
};

export default Navigation