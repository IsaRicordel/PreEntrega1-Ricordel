import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { Link } from 'react-router-dom'
import { collection,  getDocs, query, where } from "firebase/firestore"
import {db} from '../../index'
import GridLoader from "react-spinners/GridLoader"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


function ItemListContainer({category, greeting}) {

    const [items, setItems]= useState([])
    const [isLoading, setIsLoading] = useState(true)

     //se crea la funcion para poder hacer el filtro ya que el dato en Firebase esta en mayuscula
     function primeraLetraMayuscula(cadena) {
        // Convierte la primera letra a mayúscula y el resto a minúsculas
        return cadena.charAt(0).toUpperCase() + cadena.slice(1).toLowerCase();
      }
    useEffect(()=>{
        const coleccionProductos = category? query(collection(db, "Items"), where("categoria", "==", primeraLetraMayuscula(category))):collection(db, "Items")
        
        setIsLoading(true)

        getDocs(coleccionProductos)
        .then((res)=> {
            const list = res.docs.map((product)=>{
                return{
                    id:product.id,
                    ...product.data()
                }
            })
            setItems(list)
        })
        .catch((error)=> console.log(error))
        .finally(()=> {
            setIsLoading(false)
        })
      
    },[category])

    return (
        <>
            <div> <h3 style={{textAlign: 'center', marginTop: '20px'}}> {greeting} </h3></div>
                
                <div className="item-list-container" style={{fontSize: '14px'}}>
                {isLoading ? (
                        <div className="spinner-container">
                           <GridLoader
                                color={'#58a759'}
                                loading={isLoading}
                                size={15}
                            />
                        </div>
                ) : (
                items.map((item) => (
                <div key={item.id} className="card">
                    <img src={item.rutaImagen} alt={item.nombre} width={130} />
                    <h3>{item.marca}</h3>
                    <p>{item.descripcion}</p>
                    <p>${item.precio}</p>
                    <Link to={`/Products/${item.categoria}/${item.id}`}>
                        <button className="btn btn-dark">Ver más</button>
                    </Link>
                </div>
                ))
                )}
            </div>
        </>
    )
  }

export default ItemListContainer
