function Contacto() {
  return (

    // contenedor del formulario de contacto
    
    <div className="container contacto mt-4 text-center">

      <h2>Contacto</h2>

      <p>¿Tienes alguna duda o consulta?</p>

      <form style={{ maxWidth: "400px", margin: "0 auto" }}>
        
        <input
          type="text"
          placeholder="Tu nombre"
          className="form-control mb-3"
        />

        <input
          type="email"
          placeholder="Tu email"
          className="form-control mb-3"
        />

        <textarea
          placeholder="Tu mensaje"
          className="form-control mb-3"
        ></textarea>

       <div className="d-flex justify-content-center mt-3">

       <button
       type="submit"
       className="btn btn-success w-100"
       style={{ maxWidth: "300px" }}
      >
        Enviar
      </button>

</div>

      </form>

    </div>
  );
}

export default Contacto;