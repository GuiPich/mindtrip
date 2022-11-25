import React from 'react'
import Option from '../components/Option'


function Commande() {


    const tarif = 4501
    return (
        <div>
            <div className='prixBrut'>
                <p>Price VAT in Zeni (without options) <span> {tarif} Ƶ</span></p>
            </div>
            <Option tarif={tarif} />
        </div>
    )
}


export default Commande;