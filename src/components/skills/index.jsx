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
                    The standard chunk of Lorem Ipsum used since the 1500s is  reproduced below for those interested. Sections 1.10.32 
                    and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero
                    are also reproduced in their exact original form, accompanied
                    by English versions from the 1914 translation by H. Rackham.
                </p>
                <CallToAction text="Download CV "  icon = {<AiOutlineCloudDownload />}/>
            </div>
        </div>

    </Section>
  );
};

export default Skills;