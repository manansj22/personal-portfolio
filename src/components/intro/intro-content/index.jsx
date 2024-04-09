import React from "react";
import {BsAwardFill} from "react-icons/bs";
import {FaUser} from "react-icons/fa";

import hand from "../../../images/hand.png";
import manan from "../../../images/manan.png";
import "./style.scss";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

const IntroContent = () => {
  return (
  <div className="intro-content">
    <div className="layout">
        <div className="left-col">
            <h1 className="title">
                <span className="small-text">
                    <span className="text">Hello</span>
                    <span className="icon">
                        <img src= {hand}  />
                    </span>
                    <span className="text">, I Am</span>
                </span>
                <span className="big-text"> Manan Singh Jadon </span>
            </h1>
            <p>
            "Welcome! I'm a passionate web developer dedicated to crafting immersive online experiences. With expertise in HTML,
            CSS, JavaScript, and more, I thrive on transforming ideas into visually stunning and functional websites.
            From sleek designs to seamless user interfaces, 
            I'm committed to delivering tailored solutions that 
            elevate your online presence. 
            Let's collaborate and bring your vision to life!" 
            </p>
            <CallToAction text="Contact me"  action={() => scrollToSection("contact")} />
        </div>
        <div className="right-col">
            <img src={manan} alt="MSJ Dev" />
            <div className="highlight horizontal">
                <div className="icon">
                    <BsAwardFill />
                </div>
                <div className="text">Best Design Award</div>
            </div>

            <div className="highlight verticle">
                <div className="icon">
                    <FaUser/>
                </div>
                <div className="text">
                    <span>4k+</span>
                    Happy Customers
                </div>
            </div>

        </div>
    </div>
  </div>
  );
};

export default IntroContent;