const toggleThemeButton = document.getElementById('themeBtn');
const body = document.body;


function toggleTheme() {
    
    const isDarkTheme = body.classList.contains('dark-theme');
    
    const newClasses = classNames({
        'dark-theme': !isDarkTheme,
        'light-theme': isDarkTheme
    });

    body.className = newClasses; 
}

toggleThemeButton.addEventListener('click', toggleTheme);
