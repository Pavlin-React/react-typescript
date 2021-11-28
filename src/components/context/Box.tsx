import { useContext } from "react"
import { ThemeContext } from './ThemeContext'

export let Box = () => {
  let theme = useContext(ThemeContext)
  return(
    <div style={{backgroundColor: theme.primary.main, color: theme.primary.text}} >
      Theme Context
    </div>
  )
}