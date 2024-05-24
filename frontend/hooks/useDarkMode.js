
import {useLocalStorage} from '../hooks/useLocalStorage'

export function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage('darkMode',false)
    return [darkMode, setDarkMode]
}