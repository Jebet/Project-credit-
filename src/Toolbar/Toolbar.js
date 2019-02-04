import React from 'react';
import ToggleButton from '../Button/ToggleButton';
import SideDrawer from '../SideDrawer/SideDrawer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './Toolbar.css';

const Toolbar = (props) => {
    return (
    <div className="container-toolbar"> 
                <div className="toolbar-navigation">
                    <ToggleButton click={props.drawerClickHandler} />
                  
                    <div className="toolbar-logo">
                            <a href="/">LOGO</a>
                    </div>
                    <div className="spacer"></div>
                        <div className="navigation-items">
                            <ul>
                                <li><Link to="/home">Dashboard</Link></li>
                                <li><a href="link1">Airtime</a></li>
                                <li><a href="link3">Profile</a></li>
                            </ul>
                        </div>
                </div>
            </div>  
    );  
}


export default Toolbar;