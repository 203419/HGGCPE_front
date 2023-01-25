import React from "react";
import axios from 'axios';
import FileSaver from 'file-saver';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,           //Cambiar el selected file por los distintos campos de imagen
      usuario: '',
      nombre: '',
      objetivo: 'Objetivo ejemplo',
      identificador: 'DOC_A_D_2023',
      ind_met: 'Metricas Metricas Metricas Metricas Metricas Metricas Metricas Metricas',
      des_actividades: '- Texto de prueba para generación de PDF utilizando Django y Postman\n-Texto de prueba para generación de PDF utilizando Django y Postman\n- Texto de prueba para generación de PDF utilizando Django y Postman',
      categoria: 'Categoria ejemplo',
      salida: 'Documento 1, documento 2, documento 3, diagrama 3, documento 5',
      frecuencia: 'Semanalmente', 
      introE: 'introducción de la evidencia ejemplo',
      alcanceE: 'Ejemplo de alcance del documento', 
      objetivosE: 'Ejemplo de los objetivos de la evidencia',
      des_componentesE: 'Ejemplo de descripción de compontentes'
    };
  }

  handleFileSelect = event => {          //Agregar handleFile y handleChange para nuevos input
    this.setState({
      selectedFile: event.target.files[0]
    });
  };
  
  handleNameChange = event => {
    this.setState({
      nombre: event.target.value
    });
  };
  
  handleUserChange = event => {
    this.setState({
      usuario: event.target.value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    const formData = new FormData();
   
    formData.append('nombre', this.state.nombre);
    formData.append('usuario', this.state.usuario);
    formData.append('objetivo', this.state.objetivo);
    formData.append('identificador', this.state.identificador);
    formData.append('ind_met', this.state.ind_met);
    formData.append('des_actividades', this.state.des_actividades);
    formData.append('diagrama_flujo', this.state.selectedFile);
    formData.append('categoria', this.state.categoria);
    formData.append('salida', this.state.salida);
    formData.append('frecuencia', this.state.frecuencia);
    formData.append('introE', this.state.introE);
    formData.append('alcanceE', this.state.alcanceE);
    formData.append('objetivosE', this.state.objetivosE);
    formData.append('arq1', this.state.selectedFile);
    formData.append('comp1', this.state.selectedFile);
    formData.append('des_componentesE', this.state.des_componentesE);

    axios.post('http://127.0.0.1:8000/generarPDF/doc_analisis', formData, {
        responseType: 'blob', 
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
      .then(response => {
        FileSaver.saveAs(response.data, `${this.state.identificador}.pdf`);
      })
      .catch(error => {
        console.log(error);
      });
  };


  //Agregar los inputs necesarios
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input type="file" name="image" id="image" onChange={this.handleFileSelect} />
          <br />
          <input type="text" name="nombre" id="nombre" placeholder="nombre proceso" value={this.state.nombre} onChange={this.handleNameChange} />
          <br />
          <input type="text" name="usuario" id="usuario" placeholder="usuario" value={this.state.usuario} onChange={this.handleUserChange} />
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
}


export default Test;
