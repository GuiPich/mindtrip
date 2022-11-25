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
                <div className='nameContainer'>

                    <p className='nameBase'>MindTrip - DreamTrip®</p>
                    <p className='nameFooter f2'>MindTrip - DreamTrip®</p>
                    <p className='nameFooter f3'>MindTrip - DreamTrip®</p>
                    <p className='nameFooter f4'>MindTrip - DreamTrip®</p>
                </div>
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