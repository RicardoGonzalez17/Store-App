import { createContext, useState, useEffect } from "react";
import {loginUserService, getInfoUserLogin} from '../services/Services'


const UserLoginContext = createContext()

const UserLoginProvider = ({children}) => {

    const [userLogin, setUserLogin] = useState()
    const sendData = async  (data) => {
        try {
            const response = await loginUserService(data)
            const token = JSON.parse(response)
            localStorage.setItem('token', response)
            await getDataUserLogin(token.token)
        } catch (error) {
          console.error(error)
        }
      }
    const getDataUserLogin = async(token) => {
        try {
            const response = await getInfoUserLogin(`Bearer ${token}`)
            const user = JSON.parse(response)
            setUserLogin(user)
        } catch (error) {
            console.error(error)
        }
    }

    const logout = () => {
      localStorage.removeItem("token")
      setUserLogin(null)
    }


    return (
        <UserLoginContext.Provider value={{ sendData, userLogin,getDataUserLogin, logout  }}>
          {children}
        </UserLoginContext.Provider>
      )
}



export {
    UserLoginContext,
    UserLoginProvider
}