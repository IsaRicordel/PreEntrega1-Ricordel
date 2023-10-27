# E-commerce Isabella Ricordel

## Funcionalidad del proyecto:

Brindar a los usuarios a través de una navegabilidad eficiente la posibilidad de acceder a productos relacionados con la escalada deportiva y comprarlos.
Cada producto presenta una breve descripción de sus características.
El usuario podrá seleccionar los productos que desee y agregarlos al carrito de compra. Finalmente, a través de un formulario que el mismo completará, se generará una orden de compra y se le devolverá un número de orden con el cuál el usuario podrá hacer seguimiento de los productos comprados.

### Npm instalados:

Aparte del 'react-bootstrap', también instalé 'react-icons' para poder traer a mi proyecto un ícono de carrito para mi CartWidget. Considero que fue una opción simplificadora para lograr optimizar mi tiempo de trabajo gracias a su sencilla instalación y utilización.

Instalé además el npm de www.npmjs.com para poder importar un spinner que aparece cada vez que la página tarde en obtener la información antes de mostrármela. Lo cuál es muy útil para dar a entender al usuario de un modo visual que la información solicitada está cargándose.

El spinner lo traje de https://www.davidhu.io/react-spinners/storybook/?path=/docs/gridloader--main - Tuve que combinar info de ambas páginas para que funcione. Lo elegí por su originalidad y necesitaba que además, fuese dinámico y esta página me ofrecía lo que buscaba.

#### Decisiones:

Traté de ser lo más ordenada posible creando una carpeta por componente y sus respectivos elementos. Así como el archivo Items.js que también preferí mantenerlo aparte ya que contenía mi array de productos y así es más fácil de llamarlo desde otro componente.