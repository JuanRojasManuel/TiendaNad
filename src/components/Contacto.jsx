//11 Implementación de rutas estaticas.
const Contacto = () => {
    return (
        <>
            <h2>Queres saber mas ...</h2>
              <div className="contacto-nad">
                <div className="contacto-img-nad">
                  <h1>CONT</h1>
                </div>
                <div className="contacto-datos-nad">
                    <form>
                        <input type="text" placeholder="Tu correo" />
                        <textarea id="subject" placeholder="Estamos para lo que necesites"></textarea>
                        <input className="general-button-nad" type="submit" value="Enviar" />
                    </form>
                  </div>
                </div>
        </>
    )
}
export default Contacto;