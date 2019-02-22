import React from 'react';
import './SideDrawer.css';


const SideDrawer = (props) => {
        return (
            <div class="side-drawer">
                <ul>
                    <li><a href="/">Dashboard</a></li>
                    <li><a href="/airtime">Airtime</a></li>
                    <li><a herf="/daily">Daily</a></li>
                </ul>
            </div>
        );
}

export default SideDrawer;