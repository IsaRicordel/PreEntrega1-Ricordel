import React from 'react'
import { Items } from '../../Helpers/Items'
import { Link } from 'react-router-dom'

const Products = () => {
    return (
        <>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <h2>Products</h2>
        </div>
        {
            Items.map((Item) => {
                return (
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                        <Link to={`/products/${Item.id}`}> {Item.categoria} </Link>
                    </div>
                )
            })
        }
        </>    
    )
}



export default Products