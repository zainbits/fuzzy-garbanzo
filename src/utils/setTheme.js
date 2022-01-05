import ThemeEngine from "./themeEngine";
import { backend } from '../backend'

const setTheme = async (newTheme=null) => {
    let root = document.documentElement;
    let currentTheme = localStorage.getItem('currentTheme')
    if (currentTheme === "null" || currentTheme === null) {
        localStorage.setItem('currentTheme', 'default')
        currentTheme = 'default'
    }
    if (newTheme) {
        localStorage.setItem('currentTheme', newTheme)
        currentTheme = newTheme
    }
    const data = await ThemeEngine(currentTheme)
    root.style.setProperty('--dashboard-bg', data["dashboard-bg"])
    root.style.setProperty('--sidebar', data["sidebar"])
    root.style.setProperty('--navbar-items', data["navbar-items"])
    root.style.setProperty('--navbar-bg', data["navbar-bg"])
    root.style.setProperty('--font-primary', data['font-primary'])
    root.style.setProperty('--font-sidebar', data['font-sidebar'])
}

export default setTheme