import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



export const AppContext = createContext()


export const AppContextProvider = (props) =>{
    const navigate = useNavigate()
    const [isEducator, setIsEducator] = useState(true)
    
    const value = {
        isEducator, setIsEducator
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}