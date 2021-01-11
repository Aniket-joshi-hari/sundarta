import React from "react";
import "../css/about.css"
import Quote from "../assets/images/quote.png";
import Dot from "../assets/images/dot.png";
function Review() {
    return (
        <div>

            <div className="about-image" >
                <img src="https://static.wixstatic.com/media/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.jpg/v1/fill/w_980,h_631,al_c,q_85,usm_0.66_1.00_0.01/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.webp"></img>
                <div class="centered">
                    <div>
                        <div className="About-room">GUEST REVIEW</div>
                        <img src={Quote} height="15" width="15"></img>
                        <div className="paragraph"> I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</div>
                        <br /><br />
                        <img src={Dot} height="25" width="25"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Review;