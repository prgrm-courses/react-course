import React from "react";
import reactLogo from "../images/react-icon-small.png";
import "../styles/navbar-style.css";

export default function Navbar() {
    return (
        <nav>
            <div className="image-title">
                <img src={reactLogo} className="reactLogo" alt="react-logo" />
                <h1>ReactFacts</h1>
            </div>
            <div className="project-name">
                <h2>React Course - Project 1</h2>
            </div>
        </nav>
    );
}
