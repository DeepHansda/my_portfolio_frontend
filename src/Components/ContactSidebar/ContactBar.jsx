import React from "react"
import {FiPhoneCall,FiLinkedin,FiFacebook,FiInstagram,FiTwitter,FiGithub } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import './contactbar.css'
function ContactBar(){
    return(
        <div className="contactBar">
            

            <div className="social-container">
                <li><><p><FiLinkedin/></p></></li>
                <li><><p><FiGithub/></p></></li>
                <li><><p><FiFacebook/></p></></li>
            </div>
        </div>
    );
}

export default ContactBar;