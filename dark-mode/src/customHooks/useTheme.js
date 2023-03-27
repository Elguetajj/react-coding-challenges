function useTheme({theme, setTheme}){
  
  const toggleDarkMode = () => {
    const isCurrentDark = theme === 'dark-mode';
    setTheme(isCurrentDark ? 'light' : 'dark-mode');
    localStorage.setItem('theme', isCurrentDark ? 'light' : 'dark-mode');
  };

  return [theme, toggleDarkMode]
}

export default useTheme