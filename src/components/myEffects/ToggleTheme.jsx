import { useContext, createContext, useState, useEffect } from "react";

const ThemeContext = createContext()

const ThemeContextProvider = ({children})=> {
    const[theme, setTheme] = useState('light')

    useEffect(()=> {
        const savedTheme = localStorage.getItem('theme')
        if(savedTheme) setTheme(savedTheme)
    }, [])

    useEffect(()=> {
        if(theme === 'dark') document.documentElement.classList.add('dark')

        if(theme === 'light') document.documentElement.classList.remove('dark') 

            localStorage.setItem("theme", theme)
    }, [theme])

    return(
        <ThemeContext.Provider value={{setTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    )
}

function ToggleThemeBtn() {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggle = ()=> {
        setTheme(theme === "light"? 'dark': 'light')
    }

    return(
        <>
            <button onClick={toggle}> {theme === "light"? "dark": "light"} </button>
        </>
    )
}


export default function ToggleTheme() {
    return(
       <ThemeContextProvider>
        <ToggleThemeBtn/>
       </ThemeContextProvider>
    )
}