import { useContext } from "react"
import  {NavbarContext}  from '../context/NavbarContext'

export const useNavbarContext = () => {
    const context = useContext(NavbarContext)

    if(context === undefined)
    {
        throw new Error('useNavbarContext debe ser usado dentro de NavbarProvider')
    }
    return context
}