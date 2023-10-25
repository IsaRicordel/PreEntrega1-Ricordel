import React from 'react'
import './Products.css'
import { Items } from '../../Helpers/Items'
import { Link } from 'react-router-dom'
import miuraimg from '../../Img/miura-lasportiva.jpg'
import selenaimg from '../../Img/selena-petzl.jpeg'
import argonimg from '../../Img/kong-mosqueton.jpg'


const Products = () => {
    return (
        <>
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <h2>Products</h2>
        </div>
        
        <div className="cat-products">
            <div className="cat-pedulas">
                <p>PÉDULAS</p>
                <Link to="/products/pedulas">
                    <img src={miuraimg} alt="pédulas" width={130}/>
                </Link>
            </div>

            <div className="cat-arneses">
                <p>ARNESES</p>
                <Link to="/products/arneses">
                <img src={selenaimg} alt="arneses" width={130} />
                </Link>
            </div>

            <div className="cat-mosquetones">
                <p>MOSQUETONES</p>
                <Link to="/products/mosquetones">
                <img src={argonimg} alt="mosquetones" width={130} />
                </Link>
            </div>
        </div>
        </>    
    )
}

export default Products