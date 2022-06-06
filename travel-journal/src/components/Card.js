import React, { useDeferredValue } from 'react';
import mapPin from "../images/mapPin.png"
function Card(props){
    return (
        <div className='cardContainer'>
            <img src={props.imageUrl} className="placeImage"></img>
            <div className='cardDescription'>

                <div className='cardLocation'>
                    <img src={mapPin}></img>
                    <h3>{props.location}</h3>
                    <a href={props.googleMapsUrl}>View on Google Maps</a>
                </div>

                <h1>{props.title}</h1>

                <span>{props.startDate} - {props.endDate}</span>
                <p>{props.description}</p>
            </div>

        </div>
    );
}

export default Card;