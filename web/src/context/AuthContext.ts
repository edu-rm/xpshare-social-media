import { createContext } from 'react'

interface IAuthContext {
  name: string
}

const authContext = createContext<IAuthContext>({} as IAuthContext)

export default authContext
