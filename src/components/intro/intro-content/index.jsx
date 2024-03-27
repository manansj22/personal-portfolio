import React from "react";
import {BsAwardFill} from "react-icons/bs";
import {FaUser} from "react-icons/fa";

import hand from "../../../images/hand.png";
import girl from "../../../images/girl.png";
import "./style.scss";
import CallToAction from "../../shared/CallToAction";

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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed 
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. 
            </p>
            <CallToAction text="Contact me" />
        </div>
        <div className="right-col">
            <img src={girl} alt="MSJ Dev" />
            <div className="highlight horizontal">
                <div className="icon">
                    <BsAwardFill />
                </div>
                <div className="text">Best Design Award</div>
            </div>

            <div className="hightlight verticle">
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