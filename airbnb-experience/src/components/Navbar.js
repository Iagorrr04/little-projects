import React from "react";

// Images.
import AirbnbLogo from "../images/airbnb-logo.png"

function Navbar() {
    return (
        <>
            <nav>
                <a><img src={AirbnbLogo}/></a>
                <h2>Experiences</h2>
            </nav>
        </>
    );
}

export default Navbar;