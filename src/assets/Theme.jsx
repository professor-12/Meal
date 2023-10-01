import { createContext, useContext, useState } from "react"




const context = createContext({ mode: "dark" })


export const useModeContext = () => {
      return useContext(context)
}

const ThemeProvider = ({ children }) => {
      const [mode, setmode] = useState('dark')
      
      return (
        <context.Provider value={{ mode:mode , setmode }}>{children}</context.Provider>
  )
}

export default ThemeProvider