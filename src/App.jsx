// HAREMOS USO DE CONTROL DE ESTADOS
import { useState } from 'react';

// TRAEMOS LA DATA DE UN ARCHIVO JSON
import data from './data.json';

// IMPORTAMOS UN COMPONENTE
import NoDisponible from './NoDisponible';

function App() {
  // estado para los productos de la lista
  // ESTADO INICIAL EL ARREGLO CONTIENE LA INFORMACION IMPORTADA
  const [productos, setProductos] = useState(data);
  console.log("Data Inicial: ", data)
  console.log("Productos Inicial: ", productos)
  let largo = productos.length;

  if (largo === 5) {
    // añadimos un producto al arreglo y actualizamos el estado
    setProductos([...productos, { "id": 6, "nombre": "WiFi", "disponible": false, "precio": 65000 }]) 

    // añadimos un producto al arreglo usando push
    //setProductos(productos.push({ "id": 6, "nombre": "WiFi", "disponible": false, "precio": 65000 }))

    console.log("Data Actualizada: ", data)
    console.log("Productos Actualizada: ", productos)
  }  

  // el return del render del app
  return (
    <div className="container">
      <div className="col-md-8">
        <h4>Listas react</h4>
        <ul>
          {/* recorre el arreglo productos con una funcion map */}
          {/* requerido usar key para evitar errores en react */}
          {productos.map((producto) => (
            <li className="d-flex mb-3" key={producto.id}>
              {producto.id} - {producto.nombre}, precio:
              <span className="text-primary">{producto.precio}</span>
              {/* si es falso al negarlo es verdadero */}
              {!producto.disponible ? <NoDisponible /> : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
