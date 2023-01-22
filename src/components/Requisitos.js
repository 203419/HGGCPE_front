import { Link } from "react-router-dom";

function Requisitos(){
    // Imprimir en pantalla un texto que diga "Evidencias"
    return(
        <div className="modal-dialog text-center  size=">
        <div className="col-sm-100 container">
            <div className="modal-content g-2 align-items-center mt-2 ml-1">

            <h4 className="modal-title mt-5 mb-3">PROCESOS</h4>
                <div className="mb-4">
                    <label className="form-label">Nombre del proceso</label>
                    <input type='text'size="50" placeholder='' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       >
                    </input>
                    
                </div>

                <div className="mb-4">
                    <label className="form-label">Objetivo</label>
                    <input type='text'size="50" placeholder='' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       >
                    </input>
                    
                </div>

                <div className="mb-4">
                    <label className="form-label">Identificador</label>
                    <input type='text'size="50" placeholder='' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       >
                    </input>
                    
                </div>

                <div className="mb-4">
                    <label className="form-label">Identificasiones y metricas</label>
                    <input type='text'size="50" placeholder='' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       >
                    </input>
                    
                </div>

                <br>
                </br>
                <br>
                </br>

                <div className="mb-4">
                    <label className="form-label">Categoria</label>
                    <input type='text'size="50" placeholder='' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       >
                    </input>
                    
                </div>

                <div className="mb-4">
                    <label className="form-label">Evidencias de salida</label>
                    <input type='text' size="50" placeholder='' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       >
                    </input>
                    
                </div>

                <div className="mb-4">
                    <label className="form-label">Frecuencia</label>
                    <input type='text' size="50" placeholder='' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       >
                    </input>
                    
                </div>
                <label className="form-label">----------------------------------------</label>
                <h4 className="modal-title mt-5 mb-3">EVIDENCIAS</h4>
                <div className="mb-4">
                    <label className="form-label">Frecuencia</label>
                    <input type='text' size="50" placeholder='' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       >
                    </input>
                    
                </div>
                <div className="mb-4">
                    <label className="form-label">Propocito</label>
                    <input type='text' size="50" placeholder='Debe de contener una descripcion breve del contenido del documento' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       >
                    </input>
                    
                </div>
                <div className="mb-4">
                    <label className="form-label">Alcance</label>
                    <input type='text' size="50" placeholder='Esta seleccion debe describir a que elementos organizativos afecta a la forma que se hizo en la Especificacion de Requisitos del Sistema' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       >
                    </input>
                    
                </div>
                <div className="mb-6">
                    <label className="form-label">Referencias</label>    
                </div>
                <button className="btn btn-success boton col-sm-6" 
                   >
                    AGREGAR
                </button>

                <div className="mb-4">
                    <label className="form-label">Funcionalidades del producto</label>
                    <input type='text' size="50" placeholder='Describir las funcionalidades del producto,punto por punto' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       >
                    </input>
                    
                </div>
                <div className="mb-4">
                    <label className="form-label">Clases y caracteristicas del usuario</label>
                    <input type='text' size="50" placeholder='Describir las clases y detallar las caracteristicas de cada uno de ellos' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       >
                    </input>
                    
                </div>
                <div className="mb-4">
                    <label className="form-label">Entorno operativo</label>
                    <input type='text' size="50" placeholder='Describir el entorno en el que opera la aplicasion' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       >
                    </input>
                    
                </div>
                 <div className="mb-4">
                    <label className="form-label">Requerimientos Funcionales</label>
                    <input type='text' size="50" placeholder='Definir y espesificar los requerimientos funcionales necesarios para el proyecto' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       >
                    </input>
                    
                </div>
                <div className="mb-4">
                    <label className="form-label">Requerimientos no funcionales</label>
                    <input type='text' size="50" placeholder='Definir y espesificar los requerimientos no funcionales del proyecto' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                       >
                    </input>
                    
                </div>


                <button className="btn btn-success boton col-sm-6" 
                   >
                    Generar PDF
                </button>

                <div className="mb-3 ">
                    <Link to='/register'> Register</Link>      
                </div> 
            </div>
        </div>
    </div>
    )

}

export default Requisitos;