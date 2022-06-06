import React from "react";

import starIcon from "../images/starIcon.png"

function Card(props) {
    let badgeText;
    if(props.openSpots === 0){
        badgeText = "Sould out";
    }
    else if (props.location =="Online"){
       badgeText = "Online";
       console.log("online")
    }
    else{
        badgeText = false;
    }
    return (
        <div className="card">
            
            <div>

                {badgeText && <div className="card--badge">
                    {badgeText}
                </div>}
                <img src={require(`../images/${props.coverImg}`)} className="card--photo"/> 
            </div>

            <div className="card--stats">
                <img src={starIcon} className="card--star"/>
                <span>{props.stats.rating} <span className="gray--text">({props.stats.reviewCount})-{props.location}</span></span>
            </div>

            <span>{props.title}</span>
            <br/>
            <span><span className="bold">From $ {props.price}<span/> / person</span></span>
        </div>
    );
}

export default Card;