import React, { Component} from 'react';
import './App.css';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';

class App extends Component {


  state = {
    termino : '',
    imagenes : [],
    pagina : ''
  }

  scroll = () =>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start');
  }

  paginaAnterior = () =>{
    //Leer el State de la Pagina Actual
    let pagina = this.state.pagina;
    //Si la PAgina es 1 ya no ir atras
    if (pagina === 1) return null;
    //Resta 1 a la pagina Actual
    pagina -= 1;
    //Asignar el Cambio al State
    this.setState({ 
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
    
  }

  paginaSiguiente = () =>{
    //Leer el State de la Pagina Actual
    let pagina = this.state.pagina;
    //sumar 1 a la pagina Actual
    pagina += 1;
    //Asignar el Cambio al State
    this.setState({ 
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
    
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=15022583-2891b7e1735571b5ee32f9e27&q=${termino}&per_page=30&page=${pagina}`;

    console.log(url);
    
    fetch(url)
      .then(respuesta => respuesta.json () )
      .then(resultado => this.setState({imagenes : resultado.hits}))


  }
  
  datosBusqueda = (termino) =>{
    this.setState({
      termino : termino,
      pagina : 1
    }, () => {
      this.consultarApi();
    })
  }

  render() {

    return (
      <div className="app container">
        <div className="jumbotron">
          <p  className="lead text-center">Buscador de Imágenes</p>
  
          <Buscador 
          
          datosBusqueda={this.datosBusqueda}
          />
  
        </div>
        <div className="row justify-content-center">

        <Resultado
          imagenes={this.state.imagenes}
          paginaAnterior={this.paginaAnterior}
          paginaSiguiente={this.paginaSiguiente}
        />

        </div>
      </div>
    );

  }
}

export default App;
