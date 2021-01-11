import React from 'react';
import "../css/header.css";
function header() {
    return (
        <div className="Header">
            <div class="ui secondary  menu Header">
                <a class=" item" >
                    HOME
                </a>
                <a class="item" href="#about">
                    ABOUT
                 </a>

                <a class=" item" href="#services">
                    SERVICES
                </a>

                <a class="item" href="#contact">
                    CONTACT
                 </a>
                <a class="item" href="#contact">
                    <button className="header-button">Book An Apointment</button>
                </a>

            </div>

        </div>
    )
}
export default header;