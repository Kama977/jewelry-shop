import React, { createContext, useEffect, useState } from 'react'

export const DarkModeContext = createContext();

export const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(
        JSON.parse(localStorage.getItem("Dark"))
    );

    const toggleMode = () => {
        setDarkMode(!darkMode)
    };

    useEffect (() => {
        localStorage.setItem("Dark", JSON.stringify(darkMode));
    }, [darkMode])
    
    return (
    <DarkModeContext.Provider value={{darkMode, setDarkMode, toggleMode}}>
                {children}
    </DarkModeContext.Provider>
    )
}



