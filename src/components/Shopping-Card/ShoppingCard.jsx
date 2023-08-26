import { useEffect,useState } from 'react'
import './shoppingcard.css'


const ShoppingCard = () => {
    const [items, setItems] = useState([])
    const [error, setError] = useState(false);

    useEffect(()=> {
        fetch('https://ecommerce-json-jwt.onrender.com/items')
        .then(response => response.json())
        .then(data => {
            setItems(data)
            console.log(error)
        })
        .catch((error)=>{
            setError(true)
            console.log(error)
        })
    }, [])
  return (
    <>
    <div className='container-all-items'>
        {error
        ? <h1>Error</h1> 
        : items.map(item=> (
            <div className='container-card' key={item.id}>
                <img src={item.image} alt="imagen-producto" />
                <span>{item.product_name}</span>
                <label>Descripción del producto</label>
                <p>$100.90</p>
                <button type='button'>Agregar al carrito</button>
                <div className='container-card-footer'>
                    <img src="src\assets\icons\entrega.png" alt="icono-entrega" />
                    <div className='container-entrega'>
                        <label>Días para recibir tu entrega</label>
                        <p>15 - 21</p>
                    </div>
                </div>
            </div>
            ))
        }
    </div>
    </>
  )
}

export default ShoppingCard