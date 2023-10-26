import React from 'react'
import './CategoryPage.css'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../ItemListContainer/ItemListContainer'


const CategoryPage = () => {
  // Obtener el parámetro de la URL que representa la categoría seleccionada
  const { category } = useParams()

  return (
      <div> 
        <h4 className="cp">Productos de la categoría: {category}</h4>
        <ItemListContainer category={category} />
      </div>
    )
  }

export default CategoryPage
