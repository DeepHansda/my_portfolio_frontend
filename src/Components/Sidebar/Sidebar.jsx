import React from 'react';
import './sidebar.css'
import {Link} from 'react-router-dom'
function Sidebar (){
    return(
        <div className="sidebar">
            <div className="side-container">
                <ul className="side-items">
                    <Link to="/"><li className="side-item">home</li></Link>
                    <Link to="/resume"><li className="side-item">resume</li></Link>
                    <Link to="/contact"><li className="side-item">contact</li></Link>
                    <Link to="/about"><li className="side-item">about</li></Link>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;