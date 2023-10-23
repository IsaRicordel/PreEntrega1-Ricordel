import React, { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'

const Cart = () => {

    const {productosCarrito, eliminarProducto} = useContext(CarritoContext)
    
    return (
        <>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <h2>Cart</h2>
        </div>
        {
            productosCarrito.length > 0 ?
            productosCarrito.map((item) => {
                return (
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                        <h4>{item.nombre}</h4>
                        <p>Cantidad: {item.cantidad}</p>
                        <button style={{
                            backgroundColor: "rebeccapurple",
                            color: "white",
                            borderRadius: "5px",
                            padding: "10px",
                            cursor: "pointer",
                            border: "border",
                            margin: "10px",
                        }} onClick={()=> eliminarProducto(item.id)}> Eliminar del carrito </button>
                    </div>
                )
            })
            :
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                <span> Debe agregar productos al carrito </span>
            </div>
        }
        </>
    )
}


export default Cart