import React from "react";
import Bandit from "../../images/bandit.jpg";
import award2018 from "../../images/Awards/2018Award.jpg"
import award2019 from "../../images/Awards/2019Award.jpg"
import award2020 from "../../images/Awards/2020Award.jpg"

function About(){
    return (
        <div>
            <div className={"about"}>
                <h1>About</h1><b/>

                <img src={Bandit} alt={"Bandit"}/><b/>

                <span>
                    We here at The Petal Patch are more than just a florist we are family. We love what we do here
                    everyday and this is our happy place. Our arrangements are made with smiles and love. With more then
                    25yrs of floral design let us design the perfect bouquet for you! Whether it be an anniversary,
                    birthday, get well, event, holiday, thinking of you, new baby, new home, wedding or sympathy
                    arrangement we got you covered! Our staff is polite, super talented and we always deliver with a
                    smile.
                </span>
            </div>



            <div className={"about-awards"}>
                <img src={award2018} alt={"2018 Award"}/>
                <img src={award2019} alt={"2019 Award"}/>
                <img src={award2020} alt={"2020 Award"}/>
            </div>



        </div>
    )
}
export default About