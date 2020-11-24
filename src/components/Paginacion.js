import React from 'react'

const Paginacion = props => {
    return(
        <div className="button-page">
            <button onClick={props.paginaAnterior} type="button">Anterior &larr;</button>
            <button onClick={props.paginaSiguiente} type="button">Siguiente &rarr;</button>
        </div>
    )
}

export default Paginacion;