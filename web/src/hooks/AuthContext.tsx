import React, { useCallback, createContext, useState, useContext } from 'react'
import api from '../services/apiClient'

interface ISignINCredentials {
  email: string
  password: string
}

interface IAuthContext {
  user: object
  signIn(credentials: ISignINCredentials): Promise<void>
  signOut(): void
}

interface IDataAuthState {
  token: string
  user: object
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IDataAuthState>(() => {
    const token = localStorage.getItem('@XPSHARE:token')
    const user = localStorage.getItem('@XPSHARE:user')

    if (user && token) {
      return {
        token,
        user: JSON.parse(user)
      }
    }

    return {} as IDataAuthState
  })

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/session', {
      email,
      password
    })
    const { token, user } = response.data

    localStorage.setItem('@XPSHARE:token', token)
    localStorage.setItem('@XPSHARE:user', JSON.stringify(user))

    setData({ token, user })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@XPSHARE:token')
    localStorage.removeItem('@XPSHARE:user')

    setData({} as IDataAuthState)
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth(): IAuthContext {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('You are not within AuthContext Provider')
  }
  return context
}

export { AuthProvider, useAuth }