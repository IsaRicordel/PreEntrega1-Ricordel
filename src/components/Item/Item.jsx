import React, { useEffect, useState } from 'react'
import './Item.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { collection, doc, getDoc} from "firebase/firestore"
import { db } from '../../index'
import { useParams } from 'react-router-dom'

const Item = () => {

  const [item, setItem]= useState({})
  const [productExists, setProductExists] = useState(true)
  const { id } = useParams()

    useEffect(()=>{
        const collectionProd = collection(db, 'Items')
        const referenciaAlDoc = doc(collectionProd, id)
        getDoc(referenciaAlDoc)
        .then((res)=> {
            if(res.exists()) {
            setItem({ id:res.id, ...res.data() })
          } else {
            setProductExists(false)
          }
        })  
        .catch((error)=> console.log(error))     
    },[id])

  return (
    <div>
      {productExists ? (
        <ItemDetail item={item}/>
      ) : (
        <div>
          <p> El producto no existe. </p>
        </div>
      )}
    </div>
  )
}
export default Item 
