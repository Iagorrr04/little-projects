import React from "react";

import Contact from "./Contact";

// All images necessary.
import catPhoto1 from "../images/catPhoto1.jpg";
import catPhoto2 from "../images/catPhoto2.jpg";
import catPhoto3 from "../images/catPhoto3.jpg";
import catPhoto4 from "../images/catPhoto4.jpg";
import catPhoto5 from "../images/catPhoto5.jpg";
import catPhoto6 from "../images/catPhoto6.jpg";

function App() {
    return (
        <>
            <Contact
                name="Luna Pierre"
                photoPath={catPhoto1}
                phoneNumber="202-555-0949"
                emailAdress="luna_p@mac.com"        
            />

            <Contact
                name="Kevin Kruger"
                photoPath={catPhoto2}
                phoneNumber="202-555-0662"
                emailAdress="kruguer11@aol.com"        
            />


            <Contact
                name="Victor Pascal"
                photoPath={catPhoto3}
                phoneNumber="202-555-0641"
                emailAdress="vipascas@optonline.com"        
            />


            <Contact
                name="Marcia Martinez"
                photoPath={catPhoto4}
                phoneNumber="202-555-0890"
                emailAdress="MMartinez@jbailie.com"        
            />


            <Contact
                name="Lito Oliver"
                photoPath={catPhoto5}
                phoneNumber="202-555-0332"
                emailAdress="litogamer1234@live.com"        
            />


            <Contact
                name="Pietro Suzan"
                photoPath={catPhoto6}
                phoneNumber="202-555-0196"
                emailAdress="pitro_suzan_personal@yahoo.com"        
            />

        </>
    );
}

export default App;