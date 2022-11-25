import React from 'react'
import Option from '../components/Option'
import Navbar from '../components/navbar/Navbar';


function Commande() {


    const tarif = 4501
    return (
        <div>

            <div>Commande</div>
            <p>Prix TTC en Zeni (hors options) {tarif} Ƶ</p>

            <Option tarif={tarif} />



        </div>
    )
}


export default Commande;