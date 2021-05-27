import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import * as Const from '../../const/const'
import axios from 'axios';

const Chapter = () => {
    let { novel, chapter } = useParams();
    const [getNovel, setNovel] = useState({})
    // const querystring = require("querystring");
    const getData = () => {
        // let qs = {
        //     "action": Const.ChapterAction,
        //     "novel": novel,
        //     "chapter": chapter,
        // }

        axios.get(`https://api.wmsam.dev/${novel}/${chapter}`)
            .then(response => {
                setNovel(response.data)
            })
            .catch(err => {
                console.log('err')
            });
    }
    useEffect(getData, [novel, chapter]);

    return (
        <div>
            <p>
                NOVEL:{Const.Novel[novel]}
            </p>
            <p>
                CHAPTER:{chapter}
            </p>
            <p>
                TITLE:{getNovel.title}
            </p>

            <p>
                {getNovel.text}
            </p>


        </div>
    )
};

export default Chapter;