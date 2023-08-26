import './navbar.css'

const Navbar = () => {
  return (
    <>
    <nav className='nav'>
       <img src="src\assets\logo-Gonzalez.png" alt="logo" />
        <ul>
            <li className='isActive'>
                <span>Inicio</span>
            </li>
            <li>
                <span>Categorias</span>
            </li>
            <li>
                <span>Iniciar sesión</span>
            </li>
            <li>
                <span>Registrarme</span>
            </li>
            <li>
                <span> <img src='src\assets\icons\carrito-compras.png' alt='carrito compras'></img> </span>
            </li>
        </ul>
    </nav>
    <div className='container'>
        <img src="src\assets\header.jpg" alt="header-img" />
        <div className='container-text'>
            <h1>Envios SEGUROS para todo México</h1>
            <h2>Envio gratis a partir de $999</h2>
        </div>
    </div>
    </>
  )
}

export default Navbar