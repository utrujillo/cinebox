'use client'
import React, { createContext, useState } from 'react'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [ peliculas, setPeliculas ] = useState([])
    const [ isLoading, setIsLoading ] = useState(false)
    const [ categoriaBuscada, setCategoriaBuscada ] = useState('')

    return (
        <AppContext.Provider value={
            { peliculas, setPeliculas, isLoading, setIsLoading, categoriaBuscada, setCategoriaBuscada }
        }>
            {children}
        </AppContext.Provider>
    )
}