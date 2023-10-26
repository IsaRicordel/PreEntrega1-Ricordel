import React, {useState} from 'react'
import './ItemCount.css'
import { Button } from 'react-bootstrap'

const ItemCount = ({stock, onAdd, initial}) => {
    const [count, setCount] = useState(initial)

        const sumar = () => {
            if(count < stock){
                setCount(count + 1)
            }
        }
        const restar = () => {
            if(count > 0){
                setCount(count - 1)
            }
        }

        const addToCart = () => {
            onAdd(count)
          }

    return(
        <div className="d-flex flex-column align-item-center justify-content-between">
            <div>
                <Button variant='dark' onClick={restar}>-</Button>
                <span className="btn">{count}</span>
                <Button variant='dark' onClick={sumar}>+</Button>
            </div>
            <Button className="btn-ic-addtocart"variant="dark" onClick={addToCart}>Agregar al carrito</Button>
        </div>
    )
}

export default ItemCount
