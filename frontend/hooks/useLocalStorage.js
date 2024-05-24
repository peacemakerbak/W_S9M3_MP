import {useState} from 'react'

export function useLocalStorage(key, initialValue) {
    const [v, setV] = useState (() => {
        const initial = localStorage.getItem(key)
        return initial ? JSON.parse(initial) : initialValue
    })
    const setVValue = (value) => {
        setV(value)
        localStorage.setItem(key, JSON.stringify(value))
    }
    return [v, setVValue]
    }