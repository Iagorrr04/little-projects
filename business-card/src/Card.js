import React from "react";

// Import all images.
import emailIcon from "./images/email-icon.png";
import facebookIcon from "./images/facebook-icon.png";
import githubIcon from "./images/github-icon.png";
import iagoPhoto from "./images/iago-photo.jpg";
import instagramIcon from "./images/instagram-icon.png";
import linkedinIcon from "./images/linkedin-icon.png";
import twiterIcon from "./images/twiter-icon.png";

function Card() {
    return(
        <main>
            <img src={iagoPhoto} alt="" height="317px"/>

            <div className="main--titles">
                <h1>Iago Rocha</h1>
                <h2>Frontend student</h2>
                <h3>iagorrr.website</h3>
            </div>

            <button className="main--emailbutton"><img src={emailIcon}/>Email</button>

            <div className="main--about">
                <h2>About</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus autem beatae tempore recusandae sint asperiores ipsum aliquam, quibusdam doloribus reiciendis quod ab.
                </p>

                <h2>Interests</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut magni minima consequuntur recusandae. Maxime aspernatur alias rerum corrupti.
                </p>
            </div>

            <footer>
                <a href="https://twitter.com/?lang=en"><img src={twiterIcon} alt="" /></a>
                <a href="https://www.facebook.com/"><img src={facebookIcon} alt="" /></a>
                <a href="https://www.instagram.com/"><img src={instagramIcon} alt="" /></a>
                <a href="https://www.linkedin.com/"><img src={linkedinIcon} alt="" /></a>
                <a href="https://github.com/Iagorrr04"><img src={githubIcon} alt="" /></a>
            </footer>
        </main>
    );
}


export default Card;