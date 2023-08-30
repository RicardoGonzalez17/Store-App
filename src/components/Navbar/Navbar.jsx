import './navbar.css'
import { Link } from 'react-router-dom'
import logo from '@/assets/logo-Gonzalez.png';
import carrito from '@/assets/icons/carrito-compras.png'
import { useUserLoginContext } from '../../hooks/useUserLoginContext'
import { useNavbarContext } from '../../hooks/useNavbarContext'
import { useEffect } from 'react';

const Navbar = () => {

    const {handleSearch} = useNavbarContext()
    const {userLogin, getDataUserLogin, logout, login} = useUserLoginContext()
    useEffect(()=>{
        if(localStorage.getItem("token"))
        {
            const token = JSON.parse(localStorage.getItem("token"))
            getDataUserLogin(token.token)
        }
    },[login])

  return (
    <>
    <nav className='nav'>
    <Link style={{ textDecorationLine: 'none'}} to={`/`}><img src={logo} alt="logo" /></Link>
        <ul>
            <li className='isActive'>
                <Link style={{ textDecorationLine: 'none'}} to={`/`}><span>Inicio</span></Link>
            </li>
            <li>
                <Link style={{ textDecorationLine: 'none'}} to={`/register`}><span>Categorias</span></Link>
            </li>
            {userLogin?
            (
            <>
            <li>
                <span>Bienvenido {userLogin.first_name}</span>
            </li>
            <li>
                <span onClick={logout}>Cerrar sesión</span>
            </li>
            </>
            ) :
            <li>
                <Link style={{ textDecorationLine: 'none'}} to={`/login`}><span>Iniciar sesión</span> </Link>
            </li>
            }   
            {userLogin?
            (
            <li>
                {userLogin.role === 'ADMIN'?
                (
                    <Link style={{ textDecorationLine: 'none'}} to={`/newproduct`}><span>Nuevo producto</span></Link>
                )
                :
                null
                }
            </li>
            ) 
            : 
            <li>
                <Link style={{ textDecorationLine: 'none'}} to={`/register`}><span>Registrarme</span></Link>
            </li>
            }
            <li>
            <Link style={{ textDecorationLine: 'none'}} to={`/`}><span> <img src={carrito} alt='carrito compras'></img> </span> </Link>
            </li>
        </ul>
        <input 
        type="text" 
        name="" 
        placeholder='Buscar producto'
        onChange={(event) => handleSearch(event.target.value)}
        onKeyDown={(event) => {
            if (event.key === 'Enter') {
                event.preventDefault() // Previene el comportamiento por defecto
            }
        }}
         />
    </nav>
    </>
  )
}

export default Navbar