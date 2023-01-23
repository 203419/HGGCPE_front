function PlanPruebas() {
  // Imprimir en pantalla un texto que diga "Evidencias"
  return (
    <div className="modal-dialog text-center ">
      <div className="col-sm-100 container">
        <div className="modal-content g-2 align-items-center mt-2 ml-1">
          <h4 className="modal-title mt-5 mb-3">PROCESOS</h4>
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
            <label className="form-label">Indicaciones y métricas</label>
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

          <label className="form-label">Tipo de errores</label>
          <textarea
            size="100"
            id="story"
            name="story"
            rows="5"
            cols="33"
            placeholder="Enlistar y describir los errores"
          ></textarea>

          <br></br>
          <label className="form-label">
          Criterios de aceptación de pruebas
          </label>
          <button className="btn btn-success boton col-sm-6">AGREGAR</button>

          <label className="form-label">
            Criterios para las pruebas de usabilidad
          </label>
          <textarea
            size="100"
            id="story"
            name="story"
            rows="5"
            cols="33"
            placeholder="Dar una breve explicación de lo que trata"
          ></textarea>
          <br></br>
          <button className="btn btn-success boton col-sm-6">
            AGREGAR
          </button>
          <div className="row">
            <div className="col pr-0">
              <form className="col-12">
                <div className="mb-3">
                  <label className="form-label">Caso de prueba</label>
                  <input
                    type="text"
                    placeholder="Describa el caso de pruebas"
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
                    Folio
                  </label>
                  <input
                    type="text"
                    placeholder="Escriba el folio de la prueba"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                </div>
              </form>
            </div>
          </div>

          <br></br>
          <label className="form-label">Casos de pruebas</label>
          <button className="btn btn-success boton col-sm-6">AGREGAR</button>

          <br></br>
          <label className="form-label">
          Casos de prueba ejecución de pruebas
          </label>
          <button className="btn btn-success boton col-sm-6">AGREGAR</button>

          <div className="row">
            <div className="col pr-0">
              <form className="col-12">
                <div className="mb-3">
                  <label className="form-label">Caso de prueba</label>
                  <input
                    type="text"
                    placeholder="Describa el caso de pruebas"
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
                    Folio
                  </label>
                  <input
                    type="text"
                    placeholder="Escriba el folio de la prueba"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                </div>
              </form>
            </div>
          </div>

          <br></br>

          <button className="btn btn-success boton col-sm-6">AGREGAR</button>

          <br></br>
          <label className="form-label">
            Casos de prueba de interfaces de usuario
          </label>
          <button className="btn btn-success boton col-sm-6">AGREGAR</button>

          <div className="row">
            <div className="col pr-0">
              <form className="col-12">
                <div className="mb-3">
                  <label className="form-label">Reporte de prueba</label>
                  <input
                    type="text"
                    placeholder="Nombre del reporte de prueba"
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
                    Folio
                  </label>
                  <input
                    type="text"
                    placeholder="Escriba el folio de la prueba"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                </div>
              </form>
            </div>
          </div>
          <button className="btn btn-success boton col-sm-6">AGREGAR</button>

          <label className="form-label">Métricas de pruebas</label>
          <textarea
            size="100"
            id="story"
            name="story"
            rows="5"
            cols="33"
            placeholder="Definir las métricas de las pruebas"
          ></textarea>

          <label className="form-label">Conclusiones</label>
          <textarea
            size="100"
            id="story"
            name="story"
            rows="5"
            cols="33"
            placeholder="Escriba las conclusiones de la prueba"
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

export default PlanPruebas;
