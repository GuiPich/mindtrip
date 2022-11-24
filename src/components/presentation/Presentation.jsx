import React from 'react';
import { Link } from "react-router-dom";
import Slider1 from './Slider1';
import Slider2 from './Slider2';
import Slider3 from './Slider3';

const Presentation = () => {
    return (
        <div className='presentation'>
            <div className='presentation_container'>
                <div className='presentation_container_text'>
                    <h2 className='presentation_container_text_title'>jzfijoijoijdf</h2>
                    <p className='presentation_container_text_speech'>dvdlknsknlnlk dfdfdfdfdf dfdfdfdfdf nsdlfknsldkfnlkndflknsf</p>
                    <Link to="/tontrip">
                        <button className='presentation_container_text_btn'>Begin my trip now !</button>
                    </Link>
                </div>
                <div className='presentation_container_slider'>
                    <Slider1 />
                </div>
            </div>




        </div>
    );
};

export default Presentation;