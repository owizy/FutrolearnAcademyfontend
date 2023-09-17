import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

function GetTheme(){
    const theme=localStorage.getItem("theme")
    if(!theme){
        localStorage.setItem("theme","light-theme")
        return "light-theme"
    }else{
        return theme
    }
}

export const ThemeProvider=({children})=>{
    const[theme,setTheme]=useState(GetTheme)
    function ToggleTheme(){
        if(theme === "light-theme"){
          setTheme("dark-theme")
        }else{
           setTheme("light-theme")
        }
    }

    useEffect(()=>{
        function RefreshTheme(){
            localStorage.setItem("theme",theme)
        }
        RefreshTheme()
    },[theme])
    return(
        <ThemeContext.Provider  value={{
            theme,
            setTheme,
            ToggleTheme
        }}>
               {children}    
        </ThemeContext.Provider>
    )
}