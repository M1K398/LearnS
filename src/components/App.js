import React from "react"
import PropType from 'prop-types'

const App = ({ saludo, subtitulo }) => {

    return (
        <>
            <h1>Hola me dejas pasar la lengua por {saludo}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, {subtitulo}</p>
        </>
    )

}

App.propTypes = {
    saludo: PropType.string.isRequired
}

App.defaultProps = {
    saludo: 'la tota',
    subtitulo: 'Miguel'

}

export default App