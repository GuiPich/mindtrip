import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';



function Navbar() {
    return (
        <div className='nav'>
            <div className='icons'>
                <Link to="/" >
                    <img className='img' src={Logo} alt="Logo" />
                </Link>
                <div className='navlink'>
                    <p className='link1'> <Link to="/"> Home </Link></p>
                    <p className='link2'> <Link to="/TonTrip"> Your Trip </Link></p>
                </div>
            </div>
        </div>
    )
}

export default Navbar;