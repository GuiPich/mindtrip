import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';



function Navbar() {
    return (
        <div className='nav'>
            <div className='icons'>
                <Link to="/home" >
                    <img className='img' src={Logo} alt="Logo" />
                </Link>
                <p className='link'> <Link to="/TonTrip"> Your Trip </Link></p>
            </div>
        </div>
    )
}

export default Navbar;