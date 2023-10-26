import { collection, serverTimestamp } from 'firebase/firestore'
import React, { useState, useContext } from 'react'
import { db } from '../../index'
import { CarritoContext } from '../../Context/CarritoContext'


const Checkout = () => {
    const [user, setUser] = useState({})
    const [validateEmail, setValidateEmail ] = useState('')
    const {cart, total, clear}= useContext(CarritoContext)

    const datosComprador = (e) =>{
        setUser({
            ...user, 
            [e.target.name]:e.target.value
        })
    }
    const finalizarCompra = (e) => {
        e.preventDefailt()
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
            
        }
    }
  return (
    <div>
        <h2> Terminar compra </h2>
        <h5> Por favor, complete con sus datos</h5>
        <form onSubmit={ finalizarCompra }>
            <div className='mb-3'>
                <label className='form-label'> Nombre completo </label>
                <input className='form-control' onChange={datosComprador} type='text' placeholder='Nombre y Apellido' name='name' required/>
            </div>
            <div className='mb-3'>
                <label className='form-label'> Número de teléfono </label>
                <input className='form-control' onChange={datosComprador} type='number' placeholder='+5491126849534' name='phone'required/>
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
    </div>

  )
}

export default Checkout