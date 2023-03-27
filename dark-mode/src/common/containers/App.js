import React, { useState } from 'react';
import ThemeContext from 'contexts/ThemeContext';

const isBrowserDefaultDark = () => window.matchMedia('(prefers-color-scheme: dark)').matches;

const getDefaultTheme = () => {
  const localStorageTheme = localStorage.getItem('theme');
  const browserDefault = isBrowserDefaultDark() ? 'dark-mode' : 'light';
  return localStorageTheme || browserDefault;
};

export default function App({ children }) {

  const [theme, setTheme] = useState(getDefaultTheme())

  return(
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
    )
}
