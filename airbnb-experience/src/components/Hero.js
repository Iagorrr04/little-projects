import React from "react";

// Images
import examples from "../images/examples.png"

function Hero() {
    return (
        <div className="hero-container">
            <img src={examples}/>

            <div className="hero--text">
                <h1>Online Experiences</h1>
                <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    );
}

export default Hero;