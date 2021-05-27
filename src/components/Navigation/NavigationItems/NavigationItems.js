import axios from 'axios';
import React, { useState, useEffect } from 'react';

import * as Const from '../../../const/const'
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const NavigationItems = props => {
    const [novelList, setNovelList] = useState([])

    const getData = () => {
        axios.get(`https://api.wmsam.dev/novels`)
            .then(response => {
                let novels = []
                for (var i = 0; i < response.data.length; i++) {
                    novels.push(response.data[i].Name)
                }
                setNovelList(novels)
            })
            .catch(err => {
                console.log('err')
            });
    }

    useEffect(() => {
        getData();
    }, []);

    return (<ul className={classes.NavigationItems}>
        {novelList.map(novel => (
            <NavigationItem link={`/${novel}`} exact>{Const.Novel[novel]}</NavigationItem>
        ))}

    </ul>);
};


export default NavigationItems;