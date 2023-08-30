
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/index'
import Navbar from './components/Navbar/Navbar'
import { NavbarProvider } from './context/NavbarContext'
import { UserLoginProvider } from './context/UserLoginContext'

function App() {

  return (
    <NavbarProvider>
      <UserLoginProvider>
      <BrowserRouter>
        <Navbar />
        <RoutesIndex />
      </BrowserRouter>
      </UserLoginProvider>
    </NavbarProvider>
  )
}

export default App
