import { createContext, useEffect, useState } from "react"

/* Funcionalidades del carrito */

export const CarritoContext = createContext()

export const CarritoProvider = ({children}) => {
    const [cart, setCart] = useState([])

    useEffect(() => {
        console.log("Nuestro Carrito:")
        console.log(cart)
    }, [cart])

    const eliminarProducto = (id) => {
        const nuevoCarrito = cart.filter((producto) => producto.id !== id)
        setCart(nuevoCarrito)
    }

    return (
        <CarritoContext.Provider value={{productosCarrito:cart, agregarProducto:setCart, eliminarProducto}}>
            {children}
        </CarritoContext.Provider>


    )

}