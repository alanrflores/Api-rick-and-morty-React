import { useEffect, useState } from "react"
import Swal from 'sweetalert2'
import Loading from "./Loading";
import Personaje from "./Personaje";

const PintarDatos = ({nombrePersonaje}) => {
//Una vez declarado en la app del componente padre, lo usamos como props con desestructuracion

const [personajes, setPersonajes] = useState([]);

const [loading, setLoading] = useState(false);

//Para poder hacer de uso el consumirApi lo hacemos con useEffect(una vez terminado)
//y que se renderize una sola vez por eso ponemos []
//pero queremos que este pendiente por eso le ponemos nombrePersonaje adentro de []
 useEffect(()=>{
     consumirApi(nombrePersonaje)
 }, [nombrePersonaje]);

//ya lo tenemos ahora hacemos una funcion fetch
const consumirApi = async(nombre) =>{
//Cuando comienza nuestra solicitud , nuestro loading parta en true para activar el spinner
 setLoading(true);
//siempre con await
//para manejar los errores
 try{
//solicitud de fetch
//capturar la respuesta con el await

 const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=alive`);

 //En el caso que la respuesta , de el "ok" sea false que me retorne error
 if(!res.ok){
    return  Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Escriba algo por favor',
        
      });
 };
// En el caso de que lo manden correcto, usamos el await(por que ya recibe la respuesta.json)
 const datos = await res.json()
 console.log(datos.results);
 //Estos datos deberiamos empujarlos con useState
 setPersonajes(datos.results);

 } catch(error) { 
    console.log(error)
 }finally {
//para poner un loading..
//Cuando falle o sea exitoso el finally se ejecuta igual
 setLoading(false);  
   
 };

};
//En caso de que sea true va a entrar a este if y me retorna el loading y cuando esto termine
//me retorna el personaje.
 if(loading){
     return <Loading />
 }

//Una vez obtenido los personajes en el State lo podemos iterar y recorrerlos con map() que crea otro[]
//le ponemos la key que va a ser un id, y el nombre que va a viajar capturandolo, el item son los datos
  return (
    <div className="row mt-3">
        {
            personajes.map(item =>(
              <Personaje key={item.id} personaje={item}/>
            ))
        }
    </div>  
  )
}

export default PintarDatos