import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'

import Card from './Card'
import { alterarNumeroMinimo } from '../store/actions/numeros'

// eslint-disable-next-line import/no-anonymous-default-export
function Intervalo(props) {
    const { min, max } = props;
    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
            <span>
                <strong>Mìnimo:</strong>
                <input type="number" value={min} readOnly/>
            </span>
            <span>
                <strong>Máximo:</strong>
                <input type="number" value={max} readOnly/>
            </span>
            </div>
        </Card>
    )

}

function mapStateToProp(state) {
    return{
        min: state.numeros.min,
        max: state.numeros.max,
    }

}

function mapActionCreatorToProp(dispatch){
    return {
        alterarMinimo(novoNumbero){
            // action creator -> action
            const action = alterarNumeroMinimo(novoNumbero)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProp,
    mapActionCreatorToProp
)(Intervalo);