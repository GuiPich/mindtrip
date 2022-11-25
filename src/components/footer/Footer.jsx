import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';



function Footer() {
    return (
        <div className='foot'>
            <div className='icons'>
                <Link to="/" >
                    <img className='img' src={Logo} alt="Logo" />
                </Link>
                <button
                    type="button"
                    className="btnToTop"
                    onClick={() => {
                        window.scrollTo(0, 0);
                    }}
                >
                    ^
                </button>
            </div>
        </div>
    )
}

export default Footer;