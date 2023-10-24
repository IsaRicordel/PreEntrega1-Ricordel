import React, { useState, useContext } from 'react'
import './Item.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../Context/CarritoContext'
import { getItemById } from '../../Helpers/Items'
import { useParams } from 'react-router-dom'

const Item = () => {
  const { itemId } = useParams()

  const product = getItemById(itemId)

  const [quantityAdded, setQuantityAdded] = useState('')

  const {addItem} = useContext(CarritoContext)

    const onAdd = (quantity) => {
      setQuantityAdded(quantity)
      addItem(product, quantity)
    }
    if (!product) {
      return null
    }

    return (
      <div className="main-container" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <div className="eproductos" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <p> {product.nombre} </p>
          <p> {product.marca} </p>
          <img src={product.rutaImagen} alt='img-product-card' width={150}/>
          <p> ${product.precio} </p>
          { quantityAdded === '' ? <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
            : <Link to='/cart' className='btn btn-dark'> Ir al Carrito </Link> }
          
        </div>
      </div>
    )
  }


export default Item 