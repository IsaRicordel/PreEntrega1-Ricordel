import React, { useContext } from 'react'
import { BsCart4 } from 'react-icons/bs'
import { Badge } from 'react-bootstrap'
import { CarritoContext } from '../../Context/CarritoContext'

const CartWidget = () => {
    const {cartQuantity} = useContext(CarritoContext)
    return ( 
        <div className="d-flex justify-content-around align-items-center">
            <BsCart4 fontSize={'1.75rem'} color='black'/>
            {cartQuantity() > 0 && <Badge bg="danger" className="custom-badge">{cartQuantity()}</Badge>}

        </div>
    )
}

export default CartWidget