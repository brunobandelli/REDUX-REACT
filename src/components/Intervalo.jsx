import './Intervalo.css'
import React from 'react'

import Card from './Card'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    return (
        <Card title="Intervalo de Números" red>
            <div className="Intervalo">
            <span>
                <strong>Mìnimo:</strong>
                <input type="number" value={0} readOnly/>
            </span>
            <span>
                <strong>Máximo:</strong>
                <input type="number" value={10} readOnly/>
            </span>
            </div>
        </Card>
    )

}