const Estudiante = ({ datosEstudiantes }) => {
  const { nombre, edad } = datosEstudiantes;
  return (
    <div>
      <h3>
        Nombre: {nombre}, Edad: {edad}
      </h3>
    </div>
  );
};

export default Estudiante;