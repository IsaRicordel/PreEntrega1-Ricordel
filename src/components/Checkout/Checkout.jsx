import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import React, { useState, useContext } from 'react'
import { db } from '../../index'
import { CarritoContext } from '../../Context/CarritoContext'
import { Link } from 'react-router-dom'


const Checkout = () => {
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail ] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, total, clear}= useContext(CarritoContext)

    const datosComprador = (e) =>{
        setUser({
            ...user, 
            [e.target.name]:e.target.value
        })
    }
    const finalizarCompra = (e) => {
        e.preventDefault()
        if(!user.name && !user.phone && !user.mail){
            alert('los campos son obligatorios')
        }else{
            let order = {
                user,
                item:cart,
                total:total(),
                date:serverTimestamp()
            }
            const ventas = collection(db, "orders")
            addDoc(ventas, order)
            .then((res)=> {
                setOrderId(res.id)
                clear()
            })            
            .catch((error)=> console.log(error))            
        }
    }
  return (
    <div style={{display:"flex", flexDirection:"column", textAlign: "center", alignItems:"center"}}>
        {orderId !== '' 
        ?<div className='div-checkout1' style={{marginTop: "50px"}}>
            <h2> ¡Felicitaciones! Su Orden fue generada con éxito! </h2>
            <h5 style={{paddingTop: "10px"}}> Su id de registro es: {orderId} </h5>
            <Link to='/Products' className="btn btn-dark" style={{marginTop: "20px"}}> Volver a comprar </Link>
        </div>
        :<div>
        <h2 style={{marginTop: "50px"}}> Terminar compra </h2>
        <h5 style={{paddingBottom: "30px"}}> Por favor, complete con sus datos</h5>
        <form onSubmit={ finalizarCompra }>
            <div className='mb-3'>
                <label className='form-label'> Nombre completo </label>
                <input className='form-control' onChange={datosComprador} type='text' placeholder='Nombre y Apellido' name='name' required/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> Número de teléfono </label>
                <input className='form-control' onChange={datosComprador} type='number' placeholder='1125684598' name='phone'required/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> Correo electrónico </label>
                <input className='form-control' onChange={datosComprador} type='email' placeholder='juliamena@gmail.com' name='mail'required/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> Repita correo electrónico </label>
                <input className='form-control' type='email' placeholder='juliamena@gmail.com' name='mail' onChange={((e)=> setValidateEmail(e.target.value))}/>
            </div>
            <button className='btn btn-dark' type='submit' disabled={validateEmail !== user.mail}> Generar Orden </button>
        </form>
    </div>}
    </div>
  )
}

export default Checkout