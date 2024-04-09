import React from "react";

import Section from "../shared/section";
import TechIcons from "../../images/tech-icons.png";
import CallToAction from "../shared/CallToAction";
import {AiOutlineCloudDownload} from  "react-icons/ai";
import "./style.scss";

const Skills = () => {
  return (
    <Section 
     background="dark"
     id="skills"
    >
        <div className="skills-content-wrapper">
            <div className="left-col">
                <img 
                src={TechIcons} 
                alt="HTML,CSS,REACT,JS" 
                />
            </div>
            <div className="right-col">
                <h2>Skills</h2>
                <p>
                Frontend development requires a diverse set of skills to create engaging and user-friendly interfaces.
                Key skills include proficiency in HTML, CSS, and JavaScript, the foundational languages of the web.
                Additionally, knowledge of frameworks such as ReactJS, NextJS 
                enhances the ability to build dynamic and responsive websites. Understanding design principles,
                version control systems like Git, and the ability to optimize for performance and accessibility
                are also essential in delivering high-quality frontend solutions.
                I'm also immersing myself in backend frameworks such as Node.js and Django. 
                This dual expertise empowers me to create cohesive and scalable web applications 
                that seamlessly integrate frontend and backend functionalities.
                </p>
                <CallToAction text="Download CV "  icon = {<AiOutlineCloudDownload />}/>
            </div>
        </div>

    </Section>
  );
};

export default Skills;