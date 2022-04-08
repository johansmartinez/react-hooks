import { useState } from "react";

const Header =()=>{
    const [darkMode, setDarkMode] = useState(false)

    const handleDarkMode=()=>{
        setDarkMode(lastevent=>setDarkMode(!lastevent))
    }

    return(
        <div className="header">
            <h1>Hola</h1>
            <button type="button" onClick={handleDarkMode}>{(!!darkMode)?'LIGHT MODE':'DARK MODE'}</button>
        </div>
    );
}

export {Header}