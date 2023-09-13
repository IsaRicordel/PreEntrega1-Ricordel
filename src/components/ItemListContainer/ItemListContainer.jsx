import React from 'react'
import { Item } from '../Item/Item'

const ItemListContainer = (prop) => {

  return (
    <div>
        <h2>{prop.greeting}</h2>

        <div>
            <Item /> 
        </div>


    </div>

  )
}

export default ItemListContainer 