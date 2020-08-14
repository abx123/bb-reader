import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import * as Const from '../../const/const'
import axios from 'axios';



// import classes from './Chapter.css';

const Chapter = () => {
    let { novel, chapter } = useParams();
    const [getNovel, setNovel] = useState({})
    const querystring = require("querystring");


    const getData = () => {
        let qs = {
            "action": Const.ChapterAction,
            "novel": novel,
            "chapter": chapter,
        }
        axios.get('https://9o16kbakc1.execute-api.ap-southeast-1.amazonaws.com/v1/lambda-api?' + querystring.stringify(qs))
            .then(response => {
                console.log(response.data)
                // for (var i = 0; i < response.data.length; i++) {
                //     // console.log(response.data[i])

                //     novels.push(response.data[i])
                // }
                setNovel(response.data)
                // console.log(novels)
            })
            .catch(err => {
                console.log('err')
            });
    }

    useEffect(() => {
        // return () => {
        getData();
        // };
    });



    return (
        <div>
            <div>
                NOVEL:{Const.Novel[novel]}
                <br />
            CHAPTER:{chapter}
            </div>
            <div>
                TITLE:{getNovel.title}
                <br />
                {getNovel.text}
            </div>
        </div>
    )
};

export default Chapter;