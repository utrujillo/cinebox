'use client'
import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [ peliculas, setPeliculas ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)

    return (
        <AppContext.Provider value={
            { peliculas, setPeliculas, isLoading, setIsLoading }
        }>
            {children}
        </AppContext.Provider>
    )
}