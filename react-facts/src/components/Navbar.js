import React from "react"; // Must to import it to use JSX.

import ReactLogo from "../images/reactjs-icon.png" // Correct way to import an image.

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar--logo">
                <img src={ReactLogo}/>
                <h2>ReactFacts</h2>
            </div>

            <h2 id="nav--title">React Course - Project 1</h2>
        </div>
    );
}

export default Navbar;