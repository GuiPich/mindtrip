import React from 'react';
import video from "../../assets/videos/pexels-cottonbro-9669049.mp4";

const Header = () => {
    return (
        <div className='header'>
            <div className='header_video-home'>
                <video width="100%" autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <h1 className='header_title'>Make your dreams the reality</h1>
        </div>
    );
};

export default Header;