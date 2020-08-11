import React from 'react';

import burgerLogo from '../../assets/images/bb-reader.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerLogo} alt="bb-reader" />
    </div>
);

export default logo;