import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { hot } from 'react-hot-loader/root';
import CustomRouter from './CustomRouter';
import { AppContextProvider, initializer } from "appContext"
import SwitchTheme from "components/theme/SwitchTheme";

let App = () => {

    document.body.className = localStorage.getItem("theme") ?? "theme-light";

    return (
        <>
            <SwitchTheme />
            <AppContextProvider value={initializer()}>
                <BrowserRouter>
                    <ul>
                        <li>
                            <Link to={`/`}>Home</Link>
                        </li>
                        {[1, 2].map(number => (
                            <li key={`page-${number}`}>
                                <Link to={`/page-${number}`}>Page {number}</Link>
                            </li>
                        ))}
                    </ul>
                    <CustomRouter />
                </BrowserRouter>
            </AppContextProvider>
        </>
    )
}

App.defaultName = "App";

export default hot(App);
