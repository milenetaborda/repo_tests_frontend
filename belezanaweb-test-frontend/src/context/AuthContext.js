import React, { createContext, useCallback } from 'react'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const payment = useCallback((cardData) => {
    console.log(cardData)
  }, [])

  return <AuthContext.Provider value={{ payment }}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
