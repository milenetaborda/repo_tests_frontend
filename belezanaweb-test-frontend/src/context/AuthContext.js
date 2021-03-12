import React, { createContext, useCallback, useEffect, useState } from 'react'
import api from '../sevices/api'

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [products, setProducts] = useState({})
  const [data, setData] = useState(() => {
    const user = localStorage.getItem('cardDataClient')

    return { user: JSON.parse(user) }
  })

  useEffect(() => {
    api.get('/products').then((response) => {
      setProducts(response.data)
    })
  }, [])

  const payment = useCallback((cardData) => {
    localStorage.setItem('cardDataClient', JSON.stringify(cardData))

    setData(cardData)
  }, [])

  return (
    <AuthContext.Provider value={{ payment, user: data.user, products }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
