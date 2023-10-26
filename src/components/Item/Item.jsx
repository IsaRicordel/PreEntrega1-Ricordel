import React, { useEffect, useState } from 'react'
import './Item.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { collection, doc, getDoc} from "firebase/firestore"
import { db } from '../../index'
import { useParams } from 'react-router-dom'

const Item = () => {

  const [item, setItem]= useState({})
  const { id } = useParams()

    useEffect(()=>{
        const collectionProd = collection(db, 'Items')
        const referenciaAlDoc = doc(collectionProd, id)
        getDoc(referenciaAlDoc)
        .then((res)=> setItem({id:res.id, ...res.data()}))
        .catch((error)=> console.log(error))     
    },[])

    return (
      <div>
        <ItemDetail item={item}/>
      </div>
    )
}
export default Item 
