import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import axios from 'axios';
import classes from './Novel.css';
import NavigationItem from '../Navigation/NavigationItems/NavigationItem/NavigationItem'
// import test from '../Navigation/NavigationItems/NavigationItem'
// import t from '../Navigation/NavigationItems/NavigationItem/NavigationItem'
import * as Const from '../../const/const'



const Novel = () => {
    let { novel } = useParams();

    const [novelList, setNovelList] = useState([])
    // const querystring = require("querystring");

    const getData = () => {
        // let qs = {
        //     "action": Const.ListChapterAction,
        //     "novel": novel
        // }
        // alert(`https://api.wmsam.dev/${novel}/chapters`)
        axios.get(`https://api.wmsam.dev/${novel}/chapters`)
            .then(response => {
                let novels = []
                for (var i = 0; i < response.data.length; i++) {
                    novels.push(response.data[i])
                }
                setNovelList(novels)
            })
            .catch(err => {
                console.log('err')
            });
    }
    useEffect(getData, [novel]);




    var divStyle = {
        color: 'black',
        backgroundColor: '#8F5C2C',
        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    };
    return (
        <div>
            <div>
                NOVEL:{Const.Novel[novel]}
            </div>
            <div style={divStyle}>
                <ul className={classes.NavigationItems}>
                    {novelList.map(chapterList => (
                        <NavigationItem link={`/${novel}/${chapterList.chapter}`} exact>{chapterList.title}</NavigationItem>
                        // <div>{novel.title}</div>
                    ))}

                </ul>
            </div>
        </div>

    );
};

export default Novel;