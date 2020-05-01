import React, { useState } from 'react';

function SwitchTheme() {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "theme-light")

    const changeTheme = () => {

        const temp = theme === "theme-light" ? "theme-dark" : "theme-light";

        setTheme(temp);

        document.body.className = temp;

        localStorage.setItem("theme", temp);
    }

    return (
        <button onClick={() => { changeTheme()}}>
            switch theme
        </button>
    )
}

SwitchTheme.defaultName = "SwitchTheme";

export default SwitchTheme;
