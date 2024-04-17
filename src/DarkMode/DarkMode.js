import React, { useContext, useState } from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
import { DarkModeContext } from "../GlobalContext/Theme";

const DarkMode = () => {

    const { darkMode, toggleMode } = useContext(DarkModeContext);


    return (
        <div>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleMode}
                checked={darkMode}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
