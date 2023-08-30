import { useEffect,useState } from 'react'
import './shoppingcard.css'
import { Link } from 'react-router-dom'
import noimage from '@/assets/no-image.png'
import { useNavbarContext } from '../../hooks/useNavbarContext'


const ShoppingCard = () => {
    const {filteredItems} = useNavbarContext()

   
  return (
    <>
    {<div className='container-all-items'>
        { 
        filteredItems.map(item=> (
            <div className='container-card' key={item.id}>
                <img src={item.image ? item.image : noimage} alt="imagen-producto" />
                <span>{item.product_name}</span>
                <label>{item.category}</label>
                <p>{`$${item.price}`}</p>
                <Link style={{ textDecorationLine: 'none'}} to={`/productdetail/${item.id}`}><button type='button'>Ver detalle</button></Link>
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
    </div> }
    {/* <div className='container-all-items'>
        {error
        ? <h1>Error</h1> 
        : items.map(item=> (
            <div className='container-card' key={item.id}>
                <img src={item.image ? item.image : noimage} alt="imagen-producto" />
                <span>{item.product_name}</span>
                <label>{item.category}</label>
                <p>{`$${item.price}`}</p>
                <Link style={{ textDecorationLine: 'none'}} to={`/productdetail/${item.id}`}><button type='button'>Ver detalle</button></Link>
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
    </div> */}
    </>
  )
}

export default ShoppingCard