import React, { useCallback, createContext, useState, useContext } from 'react'
import api from '../services/apiClient'

interface ISignINCredentials {
  email: string
  password: string
}

interface IUserObject {
  id: number
  name: string
  email: string
}

interface IAuthContext {
  user: IUserObject
  signIn(credentials: ISignINCredentials): Promise<void>
  signOut(): void
  handleNewUserCreated(): void
  newUserCreated: boolean
}

interface IDataAuthState {
  token: string
  user: IUserObject
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext)

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IDataAuthState>(() => {
    const token = localStorage.getItem('@XPSHARE:token')
    const user = localStorage.getItem('@XPSHARE:user')

    if (user && token) {
      api.defaults.headers.auth = token

      return {
        token,
        user: JSON.parse(user)
      }
    }

    return {} as IDataAuthState
  })

  const [newUserCreated, setNewUserCreated] = useState<boolean>(false)

  const handleNewUserCreated = useCallback(() => {
    setNewUserCreated(true)
  }, [])

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('/session', {
      email,
      password
    })
    const { token, user } = response.data

    localStorage.setItem('@XPSHARE:token', token)
    localStorage.setItem('@XPSHARE:user', JSON.stringify(user))

    api.defaults.headers.auth = token

    setData({ token, user })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem('@XPSHARE:token')
    localStorage.removeItem('@XPSHARE:user')

    setData({} as IDataAuthState)
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
        handleNewUserCreated,
        newUserCreated
      }}
    >
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
