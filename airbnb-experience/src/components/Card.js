import React from "react";

import poolImage from "../images/poolImage.png"
import starIcon from "../images/starIcon.png"
function Card() {
    return (
        <div className="card">
            <img src={poolImage} className="card--photo"/>

            <div className="card--stats">
                <img src={starIcon} className="card--star"/>
                <span>5.0 <span className="gray--text">(6) USA</span></span>
            </div>

            <span>Life lessons with Katie Zaferes</span>
            <br/>
            <span><span className="bold">From $ 136<span/> / person</span></span>
        </div>
    );
}

export default Card;