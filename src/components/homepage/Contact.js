import React from "react";
import {ReactComponent as Facebook} from "../../images/icons8-facebook-64.svg";
import {ReactComponent as Phone} from "../../images/icons8-phone-64.svg";
import {ReactComponent as Instagram} from "../../images/icons8-instagram-64.svg";
import {ReactComponent as Yelp} from "../../images/icons8-yelp-64.svg";
import {ReactComponent as Maps} from "../../images/icons8-google-maps-old-64.svg";
import TempMap from "../../images/TempMap.png";

function Contact(){
    return (
        <div className={"contact"}>
            <div className={"contact-info"}>
                <h1>The Petal Patch</h1>
                <div className={"contact-icons"}>
                    <Facebook/>
                    <Phone/>
                    <Instagram/>
                    <Yelp/>
                    <Maps/>
                </div>

                <h1>Hours</h1><b/>
                <h2>Monday - Friday: 10:00 AM - 3:00 PM</h2><b/>
                <h2>Saturday: 10:00 AM - 12:00 PM</h2>
            </div>
            <div className={"contact-map"}>
                <img src={TempMap} className={"contact-map"} alt={"Map"}/>
            </div>
        </div>
    )
}
export default Contact