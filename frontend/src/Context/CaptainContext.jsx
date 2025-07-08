import React, { createContext, useState, useContext } from 'react';

export const CaptainContextData = createContext();

export const useCaptain = () => {
    const context = useContext(CaptainContextData);
    if(!context) {
        throw new Error('useCaptain must be used within a CaptainContext');
    }
    return context;
}

const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const updateCaptain = (newCaptain) => {
        setCaptain(newCaptain);
    }

    const value = {
        captain,
        setCaptain: updateCaptain,
        isLoading,
        setIsLoading,
        error,
        setError,
        updateCaptain,
    }
    return (
        <CaptainContextData.Provider value={value}>
            {children}
        </CaptainContextData.Provider>
    );
};

export default CaptainContext;