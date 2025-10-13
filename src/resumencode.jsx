//ReactJS creado por META / Facebook

// html code
<h1>Uso de etiquetas basicas</h1>

// arrays
const numeros = [1,2,3,4];
const dobles = nummeros.map(num*2);


//objetos
const persona = {nombre:"Ana", edad:25 }
console.log(persona.nombre)

// Ejemplo basico react
// Ejemplo basico componente
import React from 'react';
  function Saludo() {
    return <h1> Holaaaa </h1>
  }

export default Saludo;


//crear proyecto
//npm create vite 

//correr proyecto
//npm run dev

const Bienvenida = () => <h1> Holaaaa </h1>

//listar objestos
function ListarUsuarios() {
    const Bienvenida = ["Ana", "Lau", "Maria", "Roberto", "Luis" ]
    return (
        <ul>
            {usuarios.map(usuario => (
                <li key={usuarios}>{usuario}</li>
            ))}
        </ul>
    );
  }
//props : 

//hooks
//useState

