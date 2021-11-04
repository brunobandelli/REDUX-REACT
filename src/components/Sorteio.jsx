
import React from 'react'

import Card from './Card'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const { min, max} = props 
    const aleatorio = parseInt(Math.random() * (max - min)) + min  
    return (
        <Card title="Sorteio de um Números" purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )

}