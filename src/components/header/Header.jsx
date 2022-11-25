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
            <div class="funky-container">
                <p class="funky-base">MindTrip</p>
                <p class="funky-letter fl-1">MindTrip</p>
                <p class="funky-letter fl-2">MindTrip</p>
                <p class="funky-letter fl-3">MindTrip</p>
                <p class="funky-letter fl-4">MindTrip</p>
                <p class="funky-letter fl-5">MindTrip</p>
                <p class="funky-letter fl-6">MindTrip</p>
                <p class="funky-letter fl-7">MindTrip</p>
                <p class="funky-letter fl-8">MindTrip</p>
            </div>

            <h2 className='header_title'>Make your dreams a reality</h2>
        </div>
    );
};

export default Header;