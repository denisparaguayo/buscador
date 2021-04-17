import React from 'react';

const Imagen = (props) => {

    const {largeImageURL, likes, previewURL, tags, views, type} = props.imagen;

    return(      
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src={previewURL} className="card-img-top" alt={tags}/>
                    <div className="card-body card-block">
                        <h5 className="card-title">{type}</h5>
                        <p className="card-text">{likes} Me Gusta</p>
                        <p className="card-text">{views} Vistas</p>
                        <a href={largeImageURL} className="btn btn-primary btn-block">Ver Imagen</a>
                    </div>
            </div>
        </div>

        )
}

export default Imagen;