import React from 'react'

export const Items = [
  { 
    id: 1, 
    nombre: 'Miura',
    marca: 'La Sportiva', 
    categoria: 'Pédulas', 
    precio: 80000, 
    stock: 87, 
    rutaImagen: 'miura-lasportiva.jpg' 
},
{ 
    id: 2, 
    nombre: 'Katana', 
    marca: 'La Sportiva', 
    categoria: 'Pédulas', 
    precio: 100000, 
    stock: 150, 
    rutaImagen: 'katana-lasportiva.jpg' 
},
{ 
    id: 3, 
    nombre: 'Otaki', 
    marca: 'La Sportiva', 
    categoria: 'Pédulas', 
    precio: 101000, 
    stock: 237, 
    rutaImagen: 'otaki-lasportiva.jpg' 
},
{ 
    id: 4, 
    nombre: 'Selena', 
    marca: 'Petzl', 
    categoria: 'Arneses', 
    precio: 40000, 
    stock: 132, 
    rutaImagen: 'selena-petzl.jpeg'
},
{ 
    id: 5, 
    nombre: 'Ray', 
    marca: 'Singing Rock', 
    categoria: 'Arneses', 
    precio: 45000, 
    stock: 103, 
    rutaImagen: 'ray-singingrock.jpg' 
},
{ 
    id: 6, 
    nombre: 'Jayne 3', 
    marca: 'Edelrid', 
    categoria: 'Arneses', 
    precio: 60000, 
    stock: 85, 
    rutaImagen: 'jayne3-edelrid.jpg'
},
{ 
    id: 7, 
    nombre: 'Colt Negro', 
    marca: 'Singing Rock', 
    categoria: 'Mosquetones', 
    precio: 7500, 
    stock: 326, 
    rutaImagen: 'colt-singingrock.jpg' 
},
{ 
    id: 8, 
    nombre: 'Link', 
    marca: 'Edelweiss', 
    categoria: 'Mosquetones', 
    precio: 10000, 
    stock: 125, 
    rutaImagen: 'link-edelweiss.jpg'
},
{ 
    id: 9, 
    nombre: 'Argon S Black', 
    marca: 'Kong', 
    categoria: 'Mosquetones', 
    precio: 13000, 
    stock: 238, 
    rutaImagen: 'kong-mosqueton.jpg' 
},
]

export function getItemById (id) {
    return Items.find((item) => item.id == id)
}
