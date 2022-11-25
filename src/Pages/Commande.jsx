import React from 'react'
import Option from '../components/Option'
import Navbar from '../components/navbar/Navbar';


function Commande() {


    const tarif = 4501
    return (
        <div>

            <div className='prixBrut'>
                <p>Prix TTC en Zeni (hors options) <span> {tarif} Ƶ</span></p>
            </div>
            <Option tarif={tarif} />



        </div>
    )
}


export default Commande;