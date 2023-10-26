import React, { useContext } from 'react'
import './Cart.css'
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
                <p className="total-pagar-carrito"> Total a pagar: ${total()} </p>
                <div className='btn-cart1'>
                    <button className='btn btn-danger' onClick={clear}> Vaciar carrito </button>
                    <Link className='btn btn-dark' to='/Checkout'> Finalizar compra </Link>
                </div>
               </div>
            : <div className='btn-cart2'>
                <div className='btn-cart3'>
                    <h3> Tu carrito está vacío </h3>               
                    <Link to='/Products' className="btn btn-dark"> Ir a comprar </Link>
                </div>
              </div>}
        </div>
    )
}


export default Cart