import { createContext, useState } from "react"

export type AuthUser = {
  name: string
  email: string
}

type UserContextProviderProps = {
  children: React.ReactNode
}

type UserContextType = {
  user: AuthUser | null
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
} 

export let UserContext = createContext<UserContextType | null>(null)

export let UserContextProvider = ({ children }: UserContextProviderProps) => {
  let [user, setUser] = useState<AuthUser | null>(null)
  return <UserContext.Provider value={{ user, setUser }} >{children}</UserContext.Provider>
}