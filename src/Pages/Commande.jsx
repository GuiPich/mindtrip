import React from 'react'
import Option from '../components/Option'

function Commande() {
    const tarif = 4501
    return (
        <div>

            <div>Commande</div>
            <p>Prix en Zeni TTC(hors options) {tarif} Ƶ</p>
            <Option />
        </div>
    )
}

export default Commande