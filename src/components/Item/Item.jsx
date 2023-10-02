import React from 'react'
import './Item.css'
import { useParams } from 'react-router-dom'
import { getItemById } from '../../Helpers/Items'


const Item = () => {
  const { itemId } = useParams()

  const product = getItemById(itemId)
  return (
    <div className="main-container" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <div className="eproductos" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <p> {product.nombre} </p>
        <p> {product.marca} </p>
        <img src={product.rutaImagen} alt='img-product-card' width={150}/>
        <p> ${product.precio} </p>
        <button className="btn-carrito"> Agregar al carrito</button>

      </div>
    </div>

  )
}

export default Item 