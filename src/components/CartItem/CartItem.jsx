import React, {useContext} from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import './CartItem.css'


/* Item del carrito */
const CartItem = ({item}) => {
    const {deleteItem}= useContext(CarritoContext)
    return(
        <div className="cart-item">
            <img src={item.rutaImagen} alt={item.nombre} width={85} />
            <p>{item.nombre}</p>
            <p>${item.precio}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Subtotal: ${item.quantity * item.precio}</p>
            <button className="cart-item-btn" onClick={()=> deleteItem(item.id)}> X </button>
        </div>
    )
}

export default CartItem