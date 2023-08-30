import { useContext } from "react"
import  {UserLoginContext}  from '../context/UserLoginContext'

export const useUserLoginContext = () => {
    const context = useContext(UserLoginContext)

    if(context === undefined)
    {
        throw new Error('useUserLoginContext debe ser usado dentro de UserLoginProvider')
    }
    return context
}