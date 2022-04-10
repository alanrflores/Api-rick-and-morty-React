import { useEffect, useState} from "react";
import Formulario from "./componentes/Formulario";
import PintarDatos from "./componentes/PintarDatos";

const App = () => {
//paso3 - Necesitamos la conexion que capture el nombre del personaje {"nombre"} y que ese mismo
//viaje a otro componente para que haga la solicitud("PintarDatos")
//simple string
//primero vamos almacenarlo en setNombre para guardar la informacion, una vez que se envia, 
//en formulario lo captura como  en const Formulario como un props colocandolo {setNombrePersonaje}

  const [nombrePersonaje, setNombrePersonaje] = useState("")




//const [contador, setContador] = useState(0);
//El Hook de efecto te permite llevar a cabo efectos secundarios en componentes funcionales.
//Peticiones de datos, establecimiento de suscripciones y actualizaciones manuales del DOM en 
//componentes de React serían ejemplos de efectos secundarios.
//Se ejecuta al renderizar la pagina
//useEffect(()=>{ 
//Al agregar contador entre llaves react sabe que tiene que estar pendiente de algun estado
//console.log(`contador: ${contador}`);
//para eso sirven los corchetes, puede recibir de que va a estar dependiendo
//Cada vez que el contador se actualice se va a ejecutar el hook effect
//},[contador]);
  return (
    <div className="container">
        <h1>App Rick and Morty</h1>
        <Formulario setNombrePersonaje={setNombrePersonaje}/>
        <PintarDatos nombrePersonaje={nombrePersonaje}/>
    </div>
  )
}

export default App