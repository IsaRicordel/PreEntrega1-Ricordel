import React from 'react'
import { Link } from 'react-router-dom'
import './CategoryPage.css'
import { useParams } from 'react-router-dom'
import { Items } from '../../Helpers/Items'

const CategoryPage = () => {
  // Obtener el parámetro de la URL que representa la categoría seleccionada
  const { category } = useParams()

  // Filtrar los productos que coinciden con la categoría seleccionada
  const filteredItems = Items.filter((item) => item.categoria.toLowerCase() === category.toLowerCase())

  return (
    <div>
      <h2>Productos de la categoría: {category}</h2>
      <div className="product-list">
        {filteredItems.map((item) => (
          <div key={item.id} className="product-item">
            <img src={item.rutaImagen} alt={item.nombre} width={130} />
            <h3>{item.nombre}</h3>
            <p>Marca: {item.marca}</p>
            <p>Stock: {item.stock} unidades</p>
            <Link to={`/Products/${category}/${item.id}`}>Ver detalle del Producto</Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryPage
