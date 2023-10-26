import React from 'react'
import './Products.css'
import { useParams } from 'react-router-dom'
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'


const Products = () => {
  const { category } = useParams()

  return (
      <div>
        <h2>Productos de la categoría: {category}</h2>
        <ItemListContainer category={category} />
      </div>
    )
  }

export default Products