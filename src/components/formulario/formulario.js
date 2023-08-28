import { useState } from "react"
import "./formulario.css"
import Campo  from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Botone"
const Formulario = (props) => { 

  const [nombre,actualizarNombre] = useState("");
  const [puesto,actualizarPuesto] = useState("");
  const [foto,actualizarFoto] = useState("");
  const[equipo,actualizarEquipo] = useState("");

  const [titulo,actualizarTitulo] = useState("");
  const [color,actualizarColor] = useState("");

  const {registrarColaborador, crearEquipo} = props

    const manejarEnvio = (e) =>{
        e.preventDefault()
       console.log("Manejar Envio")
       let datosAEnviar = {
        nombre: nombre,
        puesto: puesto,
        foto : foto,
        equipo: equipo

       }
       registrarColaborador(datosAEnviar);
    }
     
    const manejarNuevoEquipo = (e) => {
         e.preventDefault()
         crearEquipo({ titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>   
        <h2>Rellena el formulario para crear al colaborador</h2>
        <Campo 
         titulo="Nombre" 
         placeholder="Ingresar Nombre"
         required valor={nombre}
         actualizarValor={actualizarNombre}
        />
        <Campo  
        titulo="Puesto" 
        placeholder="Ingresar Puesto" 
        required valor={puesto} 
        actualizarValor={actualizarPuesto}
        />
        <Campo 
         titulo="Foto"   
         placeholder="Ingresar enlace de  Foto" 
         required valor={foto} 
         actualizarValor={actualizarFoto} />
        <ListaOpciones 
        valor= {equipo} 
        actualizarEquipo={actualizarEquipo}
        equipos={props.equipos} />
        <Boton texto ="Crear" />
        </form>
        <form onSubmit={manejarNuevoEquipo}>   
        <h2>Rellena el formulario para crear el equipo</h2>
        <Campo 
         titulo="Titulo" 
         placeholder="Ingresar Titulo"
         required valor={titulo}
         actualizarValor={actualizarTitulo}
        />
        <Campo  
        titulo="Color" 
        placeholder="Ingresar el color Hex" 
        required valor={color} 
        actualizarValor={actualizarColor}
        type="color"
        />
        <Boton texto  = "Registrar Equipo" />
       </form>
    </section>
} 

export default Formulario