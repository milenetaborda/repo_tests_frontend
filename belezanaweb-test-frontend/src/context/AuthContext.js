import React, { createContext, useCallback, useState } from 'react'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const user = localStorage.getItem('cardDataClient')

    return { user: JSON.parse(user) }
  })

  const payment = useCallback((cardData) => {
    localStorage.setItem('cardDataClient', JSON.stringify(cardData))

    setData(cardData)
  }, [])

  return (
    <AuthContext.Provider value={{ payment, user: data.user }}>{children}</AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
