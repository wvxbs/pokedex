import DarkMode from "../styles/DarkMode"
import LightMode from "../styles/LightMode"

const ColorScheme = currentMode => {
    if (currentMode === 'dark')
        return DarkMode
    
    return LightMode
}

export default ColorScheme