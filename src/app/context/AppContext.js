'use client'
import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [ peliculas, setPeliculas ] = useState('')

    return (
        <AppContext.Provider value={{ peliculas, setPeliculas }}>
            {children}
        </AppContext.Provider>
    )
}