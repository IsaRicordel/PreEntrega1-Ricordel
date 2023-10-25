import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { Link, useParams } from 'react-router-dom'
import { Items } from '../../Helpers/Items'

function ItemListContainer() {

    return (
        <div className="item-list-container">
            {Items.map((item) => (
            <div key={item.id} className="card">
                <img src={item.rutaImagen} alt={item.nombre} width={130} />
                <h3>{item.marca}</h3>
                <p>{item.descripcion}</p>
                <p>${item.precio}</p>
                <Link to={`/Products/${item.categoria}/${item.id}`}>Ver más</Link>
            </div>
            ))}
      </div>
    )
  }

export default ItemListContainer

/* const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const {itemId} = useParams ()

    useEffect(()=> {
        setLoading(true)
        getProducts()
        .then((res)=> {
           if(categoryId) {
                setProductos(res.filter((item) => item.categoria === itemId))
           }else{
                setProductos(res)
           }
        })
        .catch((error)=> console.log(error))
        .finally(()=> setloading(false))
    }, [itemId])

    return (

    )
} */