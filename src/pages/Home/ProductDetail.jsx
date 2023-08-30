import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import './productdetail.css'
import noimage from '@/assets/no-image.png'
import { useUserLoginContext } from "../../hooks/useUserLoginContext"

const ProductDetail = () => {
    const [item, setItem] = useState("");
    const { id } = useParams()
    const {userLogin} = useUserLoginContext()

    useEffect(()=>{
        fetch(`https://ecommerce-json-jwt.onrender.com/items/${id}`)
        .then(response => response.json())
        .then(data => setItem(data))
        .catch(()=> {

        })
    },[id])
  return (
    <div className="container_detail">
        <div className="container_detail_img">
            <img src={item.image ? item.image : noimage} alt="imagen_producto" />
        </div>
        <div className="container_detail_info">
            <h1>{item.product_name}</h1>
            <p>{item.description}</p>
            <h2>{`$${item.price}`}</h2>
            {
                userLogin ?
                (<button type='button'>Agregar al carrito</button>)
                :(
                <>
                    <h3>Inicia sesión para poder comprar este producto</h3>
                </>)
            }
            
        </div>
    </div>
  )
}

export default ProductDetail