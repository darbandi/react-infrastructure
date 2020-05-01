import './Page-2.scss';
import React from 'react';

import { withAppContext } from 'appContext';

const Page2 = (props) => (

    <div className="page-2">

        <h1 className="title">pages 2</h1>

        <div>
            <span>title from context : {props?.AppContext?.title} {" "}</span>

            <button onClick={() => { props?.AppContext?.setTitle("darbandi") }}>change name to darbandi</button>
        </div>
        
    </div>
)

Page2.defaultName = "Page2";

export default withAppContext(Page2);