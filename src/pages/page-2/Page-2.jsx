import './Page-2.scss';
import React from 'react';

import { useState, useDispatch } from 'appContext';

const Page2 = () => {

    const state = useState();
    const dispatch = useDispatch();

    return (

        <div className="page-2">

            <h1 className="title">pages 2</h1>

            <div>
                <span>title from context : {state?.title} {" "}</span>

                <button onClick={() => { dispatch({ type: "setTitle", value: "darbandi" }) }}>change name to darbandi</button>
            </div>

        </div>
    )
}

Page2.defaultName = "Page2";

export default Page2;