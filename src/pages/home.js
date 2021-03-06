import React from "react";
import Header from "../components/header";
import "../css/home.css";
import ImageContainer from "../container/imageContainer";
import Calendor from "../container/calendorContainer";
import About from "./about";
import Services from "./services";
import Todo from "./todo";
import Review from "./review";
import Form from "./form";
// http://www.salonsafari.com/
function Home() {
    return (
        <div >
            <Header />
            <ImageContainer />
            <div className="inner-wrapper">
                <div className="Home-Page-Heading">
                    <i className="ferofly">Sundarta</i>
                    <div className="sub-heading"><span className="special">-</span>A woman’s greatest asset is her beauty.<span className="special">-</span></div>
                </div>
                {/* deploy change */}
                <About />
                <Services />
                <Form />
                {/* <Calendor />
                <About />
               
                <Gallery />
                <Todo />
                ]<Review />
                 */}
            </div>
        </div>
    )
}
export default Home;