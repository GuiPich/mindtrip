import React from 'react'
import video from "../assets/videos/pexels-cottonbro-9669049.mp4";

function Home() {
    return (
        <div className='home'>
            <div className='video-home'>
                <video width="100%" autoPlay muted loop>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
    )
}

export default Home