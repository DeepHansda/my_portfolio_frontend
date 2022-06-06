import React from 'react'
import {FiPhoneCall,FiLinkedin,FiFacebook,FiInstagram,FiTwitter,FiGithub } from "react-icons/fi";
import './socialContactBar.css'

function SocialContactBar() {
    return <div className="social-contact-container">
        <li><><p><FiLinkedin /></p></></li>
        <li><><p><FiGithub /></p></></li>
        <li><><p><FiFacebook /></p></></li>
        <li><p><FiInstagram /></p></li>
    </div>;
}

export default SocialContactBar;