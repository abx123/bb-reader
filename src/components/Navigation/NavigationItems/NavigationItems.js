import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Burger Builder</NavigationItem>
        <NavigationItem link="/" exact>Burger Builder2</NavigationItem>
        <NavigationItem link="/" exact>Burger Builder3</NavigationItem>
        <NavigationItem link="/" exact>Burger Builder4</NavigationItem>
        <NavigationItem link="/" exact>Burger Builder5</NavigationItem>
        
    </ul>
);

export default navigationItems;