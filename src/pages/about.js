import React from "react";
import "../css/about.css"
import Grid from '@material-ui/core/Grid';
function About() {
    return (
        <div>
            <div className="about" id="about">
                <Grid item xs="12">
                    <div className="about-heading">
                        <div className="centered-text" id="about">Our Mission
                     <p className="para-centered"> We aim for perfection in the products we make and the service we provide.</p>
                        </div>
                    </div>

                </Grid>


            </div>

            {/* <Grid item xs="12">
                <div className="about-heading">From our family to yours</div>
                <p className="para"> We're proud to offer the highest quality, most unique merchandise on the market today. From our family to yours, we put lots of love and careful attention in each item. We hope you enjoy our work as much as we enjoy bringing it to you.</p>
            </Grid> */}
            {/* <img src="https://static.wixstatic.com/media/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.jpg/v1/fill/w_980,h_631,al_c,q_85,usm_0.66_1.00_0.01/84770f_2d6f401da0284208a7ad5d274041dffd~mv2_d_2500_1658_s_2.webp"></img> */}
            {/* <div class="centered">
                    <div>
                        <Grid item xs="12">
                            <div className="About-room" >Our services</div>
                        </Grid>
                        <div className="paragraph"> I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</div>
                        <button className="book-room">Book an appointment</button>
                    </div>
                </div> */}
        </div>

    )
}
export default About;