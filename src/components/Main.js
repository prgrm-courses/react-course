import React from "react";
import backgroud_image from "../images/react-icon-large.png";
import "../styles/main-style.css";

export default function Main() {
    return (
        <main>
            <div className="main-container">
                <h1>Fun facts about React</h1>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100k starts on Github</li>
                    <li>Is mainteined by Facebook</li>
                    <li>
                        Powers thousands of enterprises apps, including mobile
                        apps
                    </li>
                </ul>
            </div>
            <div className="backgroud-image">
                <img src={backgroud_image} alt="react backgroung logo" />
            </div>
        </main>
    );
}
