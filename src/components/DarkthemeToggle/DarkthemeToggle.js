import React from 'react'
import { useEffect, useState } from 'react'

import "./DarkthemeToggle.css";

function DarkthemeToggle() {

    const getTheme = () => {
        const theme = localStorage.getItem("theme");
        if (!theme) {
            // Default theme is taken as dark-theme
            localStorage.setItem("theme", "light-theme");
            return "light-theme";
        } else {
            return theme;
        }
    };

    const [theme, setTheme] = useState(getTheme());
    useEffect(() => {
        document.body.className = theme + ' custom-scrollbar-css';
        const refreshTheme = () => {
            localStorage.setItem("theme", theme);
        };

        refreshTheme();
    }, [theme]);

    const toggleTheme = () => {
        if (theme === 'dark-theme') {
            setTheme('light-theme');
        } else {
            setTheme('dark-theme');
        }
    }


    return (
        <div className="container--toggle">
            {
                theme === "dark-theme" ?
                    <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={() => toggleTheme()} checked />
                    :
                    <input type="checkbox" id="toggle" className="toggle--checkbox" onClick={() => toggleTheme()} />
            }
            <label htmlFor="toggle" className="toggle--label">
                <span className="toggle--label-background"></span>
            </label>
        </div>
    )
}

export default DarkthemeToggle