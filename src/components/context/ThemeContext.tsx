import { createContext } from "react";
import { theme } from './Theme'

type ThemeContextProviderProps = {
  children: React.ReactNode
}

export let ThemeContext = createContext(theme)

export let ThemeContextProvider = ({children}: ThemeContextProviderProps ) => {
  return(
    <ThemeContext.Provider value={theme} >
      {children}
    </ThemeContext.Provider>
  )
}