import { useFormulario } from "../hooks/useFormulario";
import Swal from 'sweetalert2'
//paso1
//Una vez que setNombrePersonaje lo uso como props lo puedo llamar a una funcion arriba del reset
const Formulario = ({setNombrePersonaje}) => {
//utilizamos nuestro hooks
//recibe un initialState
//Como tenemos solo un input , va a ser un objeto con un nombre + string vacio
  const [inputs, handleChange, reset] = useFormulario({
    nombre: ""
  })
//El input  se puede desestructurar, como es un objeto de los inputs 
//el value capta el nombre 
const {nombre}= inputs

const handleSubmit = e => {
    e.preventDefault()
    console.log(nombre)

    if(!nombre.trim()){
//return para que no siga con el codigo        
    return  Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Escriba algo por favor',
            
          })
    }
//con esto me limpia si escriben espacios en blanco atras o adelante y con mayuscula, me lo corrije
    setNombrePersonaje(nombre.trim().toLowerCase());

//Una vez que ya se envia la informacion lo reseteamos
    reset();
}
//en este objeto si tuvieran mas input se les va agregando sus propiedades con sus valores 
  return (

     <form onSubmit={handleSubmit}>
         <input 
            type="text"
            placeholder="Ingrese personaje"
            className="form-control mb-2"
            value={nombre}
            onChange={handleChange}
            name="nombre"

        />
        <button
           type="submit"
           className="btn btn-dark">
            Buscar
        </button>
        
    </form>
  );
};

export default Formulario