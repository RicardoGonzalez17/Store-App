import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import ProductDetail from '../pages/Home/ProductDetail'
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
import CreateProduct from '../pages/Products/CreateProduct'

const RoutesIndex = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />}/>
        <Route  path='/productdetail/:id' element={<ProductDetail />}/>
        <Route  path='/register' element={<Register />}/>
        <Route  path='/login' element={<Login />}/>
        <Route  path='/newproduct' element={<CreateProduct />}/>
    </Routes>
  )
}

export default RoutesIndex