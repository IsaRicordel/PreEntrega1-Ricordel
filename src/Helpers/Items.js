import React from 'react'
import miuraimg from '../img/miura-lasportiva.jpg'
import katanaimg from '../img/katana-lasportiva.jpg'
import otakiimg from '../img/otaki-lasportiva.jpg'
import selenaimg from '../img/selena-petzl.jpeg'
import rayimg from '../img/ray-singingrock.jpg'
import jayne3img from '../img/jayne3-edelrid.jpg'
import coltimg from '../img/colt-singingrock.jpg'
import linkimg from '../img/link-edelweiss.jpg'
import argonimg from '../img/kong-mosqueton.jpg'

export const Items = [
  { 
    id: 1, 
    nombre: 'Miura',
    marca: 'La Sportiva', 
    categoria: 'Pedulas', 
    precio: 80000, 
    stock: 87, 
    rutaImagen: miuraimg,
    descripcion: 'La Sportiva Miura Mujer Cordones'
},
{ 
    id: 2, 
    nombre: 'Katana', 
    marca: 'La Sportiva', 
    categoria: 'Pedulas', 
    precio: 100000, 
    stock: 150, 
    rutaImagen: katanaimg,
    descripcion: 'La Sportiva Katana Laces Mujer'

},
{ 
    id: 3, 
    nombre: 'Otaki', 
    marca: 'La Sportiva', 
    categoria: 'Pedulas', 
    precio: 101000, 
    stock: 237, 
    rutaImagen: otakiimg,
    descripcion: 'La Sportiva Otaki'
},
{ 
    id: 4, 
    nombre: 'Selena', 
    marca: 'Petzl', 
    categoria: 'Arneses', 
    precio: 40000, 
    stock: 132, 
    rutaImagen: selenaimg,
    descripcion: 'Petzl Selena'

},
{ 
    id: 5, 
    nombre: 'Ray', 
    marca: 'Singing Rock', 
    categoria: 'Arneses', 
    precio: 45000, 
    stock: 103, 
    rutaImagen: rayimg,
    descripcion: 'Singing Rock Ray Arnés de Escalada'

},
{ 
    id: 6, 
    nombre: 'Jayne 3', 
    marca: 'Edelrid', 
    categoria: 'Arneses', 
    precio: 60000, 
    stock: 85, 
    rutaImagen: jayne3img,
    descripcion: 'Edelrid Arnés Jayne 3 Mujer'

},
{ 
    id: 7, 
    nombre: 'Colt Negro', 
    marca: 'Singing Rock', 
    categoria: 'Mosquetones', 
    precio: 7500, 
    stock: 326, 
    rutaImagen: coltimg,
    descripcion: 'Singing Rock Colt Negro'
},
{ 
    id: 8, 
    nombre: 'Link', 
    marca: 'Edelweiss', 
    categoria: 'Mosquetones', 
    precio: 10000, 
    stock: 125, 
    rutaImagen: linkimg,
    descripcion: 'Edelweiss Link Azul'

},
{ 
    id: 9, 
    nombre: 'Argon S Black', 
    marca: 'Kong', 
    categoria: 'Mosquetones', 
    precio: 13000, 
    stock: 238, 
    rutaImagen: argonimg,
    descripcion: 'Kong Argon S Black'

},
]


export function getItemById (id) {
    return Items.find((item) => item.id == id)
}
