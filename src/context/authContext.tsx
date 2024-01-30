import { api } from '@/lib/axios'
import { ReactNode, createContext, useState } from 'react'

interface User {
  nome: string
  email: string
  token: string
}

interface handleSignInType {
  email: string
  senha: string
}

interface AuthContextProps {
  children: ReactNode
}

interface UserContextType {
  user: User
  handleSignIn: (data: handleSignInType) => Promise<void>
}

export const AuthContext = createContext({} as UserContextType)

export function AuthProvider({ children }: AuthContextProps) {
  const [user, setUser] = useState<User>({} as User)

  async function handleSignIn(data: handleSignInType) {
    const response = await api.post('/login', {
      email: data.email,
      senha: data.senha,
    })
    console.log(response.headers)
  }

  return (
    <AuthContext.Provider value={{ user, handleSignIn }}>
      {children}
    </AuthContext.Provider>
  )
}
