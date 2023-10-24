import { createContext, useState } from 'react'

/* Funcionalidades del carrito */

export const CarritoContext = createContext()

export const CarritoProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, quantity) => {
        if(isInCart(item.id)){
            setCart(cart.map((product)=> {
                if(product.id === item.id){
                    return{...product, quantity: product.quantity + quantity}
                }else{
                    return product
                }
            }))
        } else {
        setCart([...cart, {...item, quantity}])
        }  
    } 

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some((product) => product.id === id) 
    }

    const deleteItem = (id) => {
        setCart(cart.filter((product) => product.id !== id))
    }

    const cartQuantity = () => {
        return cart.reduce((acc, product)=> acc + product.quantity, 0)
    }

    const total = () => {
        return cart.reduce((acc, product)=> acc + product.quantity * product.precio, 0)
    }

    return (
        <CarritoContext.Provider value={{cart, addItem, clear, deleteItem, cartQuantity, total}}>
            {children}
        </CarritoContext.Provider>
    )
}