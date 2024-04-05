import React from 'react';

import "./style.scss";

import { FaPhoneAlt } from 'react-icons/fa';
import {MdEmail} from "react-icons/md";

const ContactInfo = () => {
  return (
        <div className="contact-info-box">
            <h4>
                I would be happy to answer any questions you may haeve about
                freelance writing or content marketing!
            </h4>
            <div className="contact-option">
                <FaPhoneAlt/>
                <span className="text">+91 9079323569</span>
            </div>
            <div className="contact-option">
                <MdEmail/>
                <span className="text">manansingh2204@gmail.com</span>
            </div>

        </div>
  );
};

export default ContactInfo;