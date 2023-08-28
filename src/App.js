import { useState } from 'react';
import {v4 as uuid} from "uuid";
import './App.css';
import Header from './components/header/header';
import Formulario from './components/formulario/formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/equipo';
import Footer from './components/footer';
 
function App() {

const[mostrarFormulario,actualizarMostrarF] = useState(true)
const[colaboradores, actualizarColaboradores] = useState([{

  id:uuid(),
  equipo: "Front End",
  foto: "https://github.com/harlandlohora.png",
  nombre: "Harland Lohora",
  puesto: "Instructor",
  fav:true

},
{
  id: uuid(),
  equipo: "Programación",
  foto: "https://github.com/genesysaluralatam.png",
  nombre: "Genesys Rondón",
  puesto: "Desarrolladora de software e instructora",
  fav:true
},
{
  id:uuid(),
  equipo: "UX y Diseño",
  foto: "https://github.com/JeanmarieAluraLatam.png",
  nombre: "Jeanmarie Quijada",
  puesto: "Instructora en Alura Latam",
  fav:true
},
{
  id:uuid(),
  equipo: "Programación",
  foto: "https://github.com/christianpva.png",
  nombre: "Christian Velasco",
  puesto: "Head de Alura e Instructor",
  fav:true
},
{
  id:uuid(),
  equipo: "Innovación y Gestión",
  foto: "https://github.com/JoseDarioGonzalezCha.png",
  nombre: "Jose Gonzalez",
  puesto: "Dev FullStack",
  fav:false
}])

//Lista de Equipos
const [equipos, actualizarEquipos] = useState([
  {
    id:uuid(),
    titulo: "Programación",
    colorPrimario: "#57c278",
    colorSecundario: "#D9F7E9"
  },
  {
    id:uuid(),
    titulo: "Front End",
    colorPrimario: "#82cffa",
    colorSecundario: "#E8F8FF"
  },
  {
    id:uuid(),
    titulo: "Data Science",
    colorPrimario: "#a6d157",
    colorSecundario: "#F0F8E2"
  },
  {
    id:uuid(),
    titulo: "Devops",
    colorPrimario: "#e06b69",
    colorSecundario: "#FDE7E8"
  },
  {
    id:uuid(),
    titulo: "UX y Diseño",
    colorPrimario: "#db6Ebf",
    colorSecundario: "#FAE9F5"
  },
  {
    id:uuid(),
    titulo: "Móvil",
    colorPrimario: "#ffba05",
    colorSecundario: "#FFF5D9"
  },
  {
    id:uuid(),
    titulo: "Innovación y Gestión",
    colorPrimario: "#ff8a29",
    colorSecundario: "#FFEEDF"
  }
])


//Ternario --> condicion ? seMuestra : noSeMuestra

const cambiarMostrar = ()  =>{
  actualizarMostrarF(!mostrarFormulario)
}

//Registrar Colaborador

const registrarColaborador = (colaborador) => {
  console.log("Nevo Colaborador " , colaborador)
  //Spread Operator
  actualizarColaboradores([...colaboradores, colaborador])
}

//eliminarColaborador
const eliminarColaborador = (id) => {
  console.log("Eliminar colaborador ", id)
  const nuevosColaboradores = colaboradores.filter((colaborador)  => colaborador.id !== id )
  actualizarColaboradores(nuevosColaboradores)
}

//actualizar Color de equipo
const actualizarColor = (color, id) => {
  console.log("Actualizar Color: " , color , id )
  const equiposActualizados = equipos.map((equipo) => {
    if(equipo.id === id){
      equipo.colorPrimario = color
    }
    return equipo
  } )

  actualizarEquipos(equiposActualizados);
}

//Crear Equipo

const crearEquipo = (nuevoEquipo) => {
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid ()} ])
}

const like = (id) => {
  console.log("like ", id)
  const colaboradoresActualizados = colaboradores.map((colaborador) => {
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(colaboradoresActualizados)
}

   return (
    <div className="App">
      <Header />
      {/*mostrarFormulario === true ? <Formulario /> : <></>*/}
      {
      mostrarFormulario && <Formulario
       equipos={equipos.map((equipo) => equipo.titulo)} 
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      />}
      <MiOrg cambiarMostrar={cambiarMostrar}/>
     {
      equipos.map((equipo) => 
        <Equipo
        datos={equipo} 
        key={equipo.titulo} 
        colaboradores= {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo )}
        eliminarColaborador={eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
      )
     }
     
     <Footer />

    </div>
  );
}

export default App;
  