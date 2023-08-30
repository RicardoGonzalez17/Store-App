import { useForm } from 'react-hook-form'
import './createproduct.css'
import {newProduct} from '../../services/ProductService'
import { useNavigate } from 'react-router-dom'
import { useNavbarContext } from '../../hooks/useNavbarContext'

const CreateProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const {setNewProduct} = useNavbarContext()
    const navigate = useNavigate()

    const newProducts = (data) => {
        newProduct(data)
        setNewProduct(true)
        navigate('/')
        
    }

  return (
    <>
    <div className='container_register'>
    <h1>Registro de producto</h1>
    <form onSubmit={handleSubmit(newProducts)}>
            <div className='container_product_name'>
                <input 
                type="text" 
                placeholder='Nombre del producto'
                {...register('product_name')}
                />
            </div>
            <div className='container_description'>
                <input 
                type="text"  
                placeholder='Descripción del producto'
                {...register('container_description')}
                />
            </div>
            <div className='container_price'>
                <input 
                type="number" 
                placeholder='Precio'
                {...register('price')}
                />
            </div>
            <div className='container_category'>
                <input 
                type="text" 
                placeholder='Categoria'
                {...register('category')}
                />
            </div>
            <div className='container_brand'>
                <input 
                type="text" 
                placeholder='Marca'
                {...register('brand')}
                />
            </div>
            <div className='container_sku'>
                <input 
                type="text"  
                placeholder='Identificador del producto'
                {...register('sku')}
                />
            </div>
            <div className='container_image'>
                <input 
                type="text"  
                placeholder='Url imagen del producto'
                {...register('image')}
                />
            </div>
            <button type='submit'>Registrar</button>
        </form>
    </div>
    </>
  )
}

export default CreateProduct