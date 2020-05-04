import "./Page-1.scss"
import React, { Profiler } from 'react';
import img from 'img/img.jpg';
import audio from 'media/01.mp3';
import { useState, useDispatch } from 'appContext';
import config from 'config';
import { profilerCallback } from 'utils';

let page1 = () => {

    const state = useState();
    const dispatch = useDispatch();

    return (

        <Profiler id="page1" onRender={profilerCallback}>

            <div className="page-1">

                <h1 className="title">page 1</h1>

                <div>siteName from site config : {config.siteName}</div>

                <div>
                    <span>title from context : {state?.title} {" "}</span>

                    <button onClick={() => { dispatch({ type: "setTitle", value: "mohammad" }) }}>change title to mohammad</button>
                </div>

                <div>
                    <img src={img} width={100} />
                </div>

                <div>
                    <audio src={audio} controls />
                </div>

            </div>

        </Profiler>
    )
}

page1.defaultName = "page1";

export default page1;