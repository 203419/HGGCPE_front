
function AnalisisDiseno() {
  // Imprimir en pantalla un texto que diga "Evidencias"
  return (
    <div className="modal-dialog text-center ">
      <div className="col-sm-100 container">
        <div className="modal-content g-2 align-items-center mt-2 ml-1">
          <h4 className="modal-title mt-5 mb-3">DOCUMENTO DE ANÁLISIS Y DISEÑO</h4>
          <div className="mb-4">
            <label className="form-label">Nombre del proceso</label>
            <input
              type="text"
              size="50"
              placeholder=""
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </div>

          <div className="mb-4">
            <label className="form-label">Objetivo</label>
            <input
              type="text"
              size="50"
              placeholder=""
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </div>

          <div className="mb-4">
            <label className="form-label">Identificador</label>
            <input
              type="text"
              size="50"
              placeholder=""
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </div>

          <div className="mb-4">
            <label className="form-label">Identificaciones y métricas</label>
            <input
              type="text"
              size="50"
              placeholder=""
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </div>

          <div className="row">
            <div className="col pr-0">
              <form className="col-12">
                <div className="mb-3">
                  <label className="form-label">
                    Descripción de actividades
                  </label>
                  <input
                    type="text"
                    placeholder="first name"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                </div>
              </form>
            </div>

            <div class="col pl-0">
              <form className="col-12">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Diagrama de flujo
                  </label>
                </div>
                <button
                  type="submit"
                  className="form-control btn btn-primary boton "
                >
                  AGREGAR
                </button>
              </form>
            </div>
          </div>

          <div className="mb-4">
            <label className="form-label">Categoría</label>
            <input
              type="text"
              size="50"
              placeholder=""
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </div>

          <div className="mb-4">
            <label className="form-label">Evidencias de salida</label>
            <input
              type="text"
              size="50"
              placeholder=""
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </div>

          <div className="mb-4">
            <label className="form-label">Frecuencia</label>
            <input
              type="text"
              size="50"
              placeholder=""
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </div>
          <label className="form-label">
            ----------------------------------------
          </label>
          <h4 className="modal-title mt-5 mb-3">EVIDENCIAS</h4>

          <label className="form-label">Introducción</label>
          <textarea
            size="100"
            id="story"
            name="story"
            rows="5"
            cols="33"
            placeholder="Debe contener una descripción breve del contenido del documento"
          ></textarea>

          <label className="form-label">Alcance</label>
          <textarea
            size="100"
            id="story"
            name="story"
            rows="5"
            cols="33"
            placeholder="Esta selección debe describir a que elementos organizativos afecta a la forma que se hizo en la Especificación de Requisitos del Sistema"
          ></textarea>

          <label className="form-label">objetivos</label>
          <textarea
            size="100"
            id="story"
            name="story"
            rows="5"
            cols="33"
            placeholder="Debe describir los principales objetivos que se esperan alcanzar cuando el sistema a desarrollar este en producción"
          ></textarea>

          <label className="form-label">Arquitectura lógica del sistema</label>
          <textarea
            size="100"
            id="story"
            name="story"
            rows="5"
            cols="33"
            placeholder="Esta selección debe contener una representación gráfica de la
            arquitectura lógica que se propone para el sistema a desarrollar.
            Se recomienda usar un diagrama de componentes UML, un
            diagrama de paquetes UML o alguna notación ad-hoc si se
            considera oportuno"
          ></textarea>

          <label className="form-label">Modelo de componente del sistema</label>
          <textarea
            size="100"
            id="story"
            name="story"
            rows="5"
            cols="33"
            placeholder="Esta selección debe contener los diagramas de componentes
            correspondientes al sistema."
          ></textarea>

          <label className="form-label">
            Descripción de los componentes del sistema
          </label>
          <textarea
            size="100"
            id="story"
            name="story"
            rows="5"
            cols="33"
            placeholder="Esta selección debe contener una descripción textual de los
            componentes identificados, en el formato que se considere más adecuado"
          ></textarea>

          <br></br>
          <button className="btn btn-success boton col-sm-6">
            Generar PDF
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnalisisDiseno;
