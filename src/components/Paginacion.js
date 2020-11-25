import React from 'react'
import Button from 'react-bootstrap/Button';

const Paginacion = props => {
    return (
        <>
            <Button onClick={props.paginaAnterior} className="primary" variant="primary" size="sm" active>&larr; Anterior</Button>
            <Button onClick={props.paginaSiguiente} variant="primary" size="sm" active>Siguiente &rarr;</Button>
            {/* <button onClick={props.paginaAnterior} type="button" variant="primary">Anterior &larr;</button>
            <button onClick={props.paginaSiguiente} type="button" variant="primary">Siguiente &rarr;</button> */}
        </>
    )
}

export default Paginacion;