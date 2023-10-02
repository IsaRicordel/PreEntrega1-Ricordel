import React from 'react'
import miuraimg from '../Img/miura-lasportiva.jpg'
import katanaimg from '../Img/katana-lasportiva.jpg'
import otakiimg from '../Img/otaki-lasportiva.jpg'
import selenaimg from '../Img/selena-petzl.jpeg'
import rayimg from '../Img/ray-singingrock.jpg'
import jayne3img from '../Img/jayne3-edelrid.jpg'
import coltimg from '../Img/colt-singingrock.jpg'
import linkimg from '../Img/link-edelweiss.jpg'
import argonimg from '../Img/kong-mosqueton.jpg'

export const Items = [
  { 
    id: 1, 
    nombre: 'Miura',
    marca: 'La Sportiva', 
    categoria: 'Pedulas', 
    precio: 80000, 
    stock: 87, 
    rutaImagen: miuraimg 
},
{ 
    id: 2, 
    nombre: 'Katana', 
    marca: 'La Sportiva', 
    categoria: 'Pedulas', 
    precio: 100000, 
    stock: 150, 
    rutaImagen: katanaimg
},
{ 
    id: 3, 
    nombre: 'Otaki', 
    marca: 'La Sportiva', 
    categoria: 'Pedulas', 
    precio: 101000, 
    stock: 237, 
    rutaImagen: otakiimg
},
{ 
    id: 4, 
    nombre: 'Selena', 
    marca: 'Petzl', 
    categoria: 'Arneses', 
    precio: 40000, 
    stock: 132, 
    rutaImagen: selenaimg
},
{ 
    id: 5, 
    nombre: 'Ray', 
    marca: 'Singing Rock', 
    categoria: 'Arneses', 
    precio: 45000, 
    stock: 103, 
    rutaImagen: rayimg
},
{ 
    id: 6, 
    nombre: 'Jayne 3', 
    marca: 'Edelrid', 
    categoria: 'Arneses', 
    precio: 60000, 
    stock: 85, 
    rutaImagen: jayne3img
},
{ 
    id: 7, 
    nombre: 'Colt Negro', 
    marca: 'Singing Rock', 
    categoria: 'Mosquetones', 
    precio: 7500, 
    stock: 326, 
    rutaImagen: coltimg
},
{ 
    id: 8, 
    nombre: 'Link', 
    marca: 'Edelweiss', 
    categoria: 'Mosquetones', 
    precio: 10000, 
    stock: 125, 
    rutaImagen: linkimg
},
{ 
    id: 9, 
    nombre: 'Argon S Black', 
    marca: 'Kong', 
    categoria: 'Mosquetones', 
    precio: 13000, 
    stock: 238, 
    rutaImagen: argonimg
},
]

export function getItemById (id) {
    return Items.find((item) => item.id == id)
}
