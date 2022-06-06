import React from "react";

import worldLogo from "../images/worldLogo.png";
import worldLogoSVG from "../images/worldLogo.svg"

function Navbar(){
    return(
        <div className="navbar">
            <div>
                <img src={worldLogo}/>
                <span>my travel journal.</span>
            </div>
        </div>
    );
}

export default Navbar;