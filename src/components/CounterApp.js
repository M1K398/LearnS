import React from 'react'
import PropType from 'prop-types'
 

const CounterApp = ({value}) => {
    return(
        <>
        <h1>CounterApp</h1>
        <h2>{value}</h2>
        </>
    )
}

CounterApp.propTypes = {
    value: PropType.number
}

export default CounterApp