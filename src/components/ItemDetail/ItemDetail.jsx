import React, { useState, useContext } from 'react'
import './ItemDetail.css'
import ItemCount from '../../components/ItemCount/ItemCount'
import { CarritoContext } from '../../Context/CarritoContext'
import { Link } from 'react-router-dom';


const ItemDetail = ({ item }) => {
  const { cart, addItem } = useContext(CarritoContext)  
  const { id, nombre, marca, descripcion, precio, rutaImagen } = item
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addItem(item, quantity)
  }

  return (
    <div className="item-detail-main" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <div className="item-detail" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            <div className="item-detail-image" style={{display:"flex", flexDirection:"column", alignItems:"center"}}> 
                <img src={rutaImagen} alt={nombre} />
            </div>
            <div className="item-detail-info" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                <h2>{nombre}</h2>
                <p>{marca}</p>
                <p>{descripcion}</p>
                <p>Precio: ${precio}</p>
                <ItemCount
                stock={item.stock}
                initial={1}
                onAdd={handleAddToCart}
                />
                <Link to="/Cart">
                    <button className='btn btn-dark' > Ver Carrito </button>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default ItemDetail;
