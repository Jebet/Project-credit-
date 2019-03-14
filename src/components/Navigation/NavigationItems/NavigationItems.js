import React from 'react';

import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/home" >Dashboard</NavigationItem>
        <NavigationItem link="/daily">Daily</NavigationItem>
        <NavigationItem link="/airtime">Airtime</NavigationItem>
    </ul>
);

export default navigationItems;