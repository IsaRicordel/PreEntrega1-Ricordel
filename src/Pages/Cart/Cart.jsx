import React, { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { Link } from 'react-router-dom'
import CartItem from '../../components/CartItem/CartItem'

const Cart = () => {

const {cart, clear, deleteItem, total} = useContext(CarritoContext)
    return (
        <div>
            {cart.length 
            ? <div>
                {cart.map((item)=> <CartItem key={item.id} item={item}/>)}
                <p> Total a pagar: ${total()} </p>
                <div>
                    <button className='btn btn-danger' onClick={clear}> Vaciar carrito </button>
                    <button className='btn btn-dark'> Finalizar compra </button>

                </div>
            </div>
            : <div>
                <h3> Tu carrito está vacío </h3>
                <Link to='/Products' className="btn btn-dark"> Ir a comprar </Link>
              </div>}
        </div>
    )
}


export default Cart