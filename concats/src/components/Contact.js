import React from "react";

// Icons images.
import cellphoneIcon from "../images/cellphoneIcon.png"
import emailIcon from "../images/emailIcon.png"
function Contact(props) {
    return (
        <div className="contact">
            <img src={props.photoPath}/>
            <h1>{props.name}</h1>

            <section>
                <img className="telephone-icon" src={cellphoneIcon}/>
                <span>{props.phoneNumber}</span>
            </section>

            <section>
                <img className="email-icon" src={emailIcon}/>
                <span>{props.emailAdress}</span>
            </section>

        </div>
    );
}
export default Contact;