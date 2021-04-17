import React, { Component } from 'react';

class buscador extends Component {
    
    busquedaRef = React.createRef();


    obtrenerDatos = (e) =>{        
        e.preventDefault();
        //Tomamos el Valor del Imput
       const termino = this.busquedaRef.current.value;

       //lo enviamos al componente Principal
        this.props.datosBusqueda(termino);

    }
    
    render() { 
        return ( 
            <form onSubmit={this.obtrenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input 
                        ref={this.busquedaRef}
                        type="text" 
                        className="form-control form-control-lg" 
                        placeholder="Busca tu Imagen. Ej: Fútbol" />
                    </div>
                    <div className="form-group col-md-4">
                        <input 
                        type="submit" 
                        className="btn btn-lg btn-danger btn-block" 
                        value="Buscar..." />
                    </div>
                </div>
            </form>
         );
    }
}
 
export default buscador;