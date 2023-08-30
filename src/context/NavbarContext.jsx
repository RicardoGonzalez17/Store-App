import { createContext, useState, useEffect } from "react";

const NavbarContext = createContext()

const NavbarProvider = ({children}) => {
    const [originalItems, setOriginalItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [newProduct, setNewProduct] = useState(false);
    useEffect(()=> {
        fetch('https://ecommerce-json-jwt.onrender.com/items')
        .then(response => response.json())
        .then(data => {
            setOriginalItems(data)
            setFilteredItems(data)
            })
        .catch((error)=>{
            //setError(true)
            console.log(error)
        })
    },[newProduct])

    const handleSearch = (data) => {
        const foundProducts = originalItems.filter(item=>{
            return item.product_name.toLowerCase().includes(data.toLowerCase())
        })
        setFilteredItems(foundProducts);
    }

    return (
        <NavbarContext.Provider value={{ handleSearch,filteredItems, setNewProduct }}>
          {children}
        </NavbarContext.Provider>
      )
}

export {
    NavbarContext,
    NavbarProvider
}