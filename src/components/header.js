import React from 'react';
import "../css/header.css";
import SidebarImage from "../assets/images/square.png";
import Sidebar from "react-sidebar";
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }
    SidebarContainer = [{ menu: 'Home', id: 'home' }, { menu: 'About', id: 'about' }, { menu: 'Services', id: 'services' }, { menu: 'Contact', id: 'contact' }, { menu: 'Book An Appintment', id: 'contact' }].map((item) => {
        return (<div class="ui secondary  menu Header">
            <ul>
                <li>
                    <a href={"#" + item.id}>{item.menu}</a></li>
            </ul>
        </div>
        )
    });
    render() {
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
                <div className="sidebar">

                    <Sidebar
                        sidebar={<b>{this.SidebarContainer}</b>}
                        open={this.state.sidebarOpen}
                        onSetOpen={this.onSetSidebarOpen}
                        styles={{ sidebar: { width: "40%", background: '#FF1493' } }}
                    >
                        <div onClick={() => this.onSetSidebarOpen(true)} style={{ width: '100%', margin: "10px", display: 'flex', justifyContent: 'right', alignContent: 'center', alignItems: 'center' }}>
                            <img src={SidebarImage} height="50" width="50" />
                        </div>
                    </Sidebar>


                </div>

            </div>
        )
    }
}
export default Header;