import React from 'react';
import {useTheme} from "../context/ThemeContext";
function Header({title}){
  const {theme,toggleTheme}=useTheme();
    return (
        <header className="header">
          <div className="header-title">
            <span className="icon"> </span>
            <h1>{title}</h1>
          </div>
          <p className="subtitle">organize your tasks and get things done.</p>
          <button className="theme-btn" onClick={toggleTheme}>
            {theme==="light"?"Dark Mode" : " Light Mode"}
          </button>
        </header>
    );
}
export default Header;