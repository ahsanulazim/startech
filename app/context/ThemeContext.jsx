'use client'

import { createContext } from 'react'
export const ThemeProvider = createContext();

export default function ThemeContext({ children }) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    )
}
