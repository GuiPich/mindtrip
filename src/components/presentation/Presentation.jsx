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
                    <h2 className='presentation_container_text_title'>Trust our team</h2>
                    <p className='presentation_container_text_speech'>Our team of mad scientists will meet your craziest expectations. A clever mix of intelligence and ham is the basis of our secret recipe.</p>
                    <Link to="/tontrip">
                        <button className='presentation_container_text_btn'>Begin my trip now !</button>
                    </Link>
                </div>
                <div className='presentation_container_slider'>
                    <Slider1 />
                </div>
            </div>

            <div className='presentation_container'>
                <div className='presentation_container_slider'>
                    <Slider2 />
                </div>
                <div className='presentation_container_text'>
                    <h2 className='presentation_container_text_title'>Top equipment</h2>
                    <p className='presentation_container_text_speech'>In a relaxed atmosphere, our staff will install you in the comfort of our state-of-the-art equipment. Contention link included.</p>
                    <Link to="/tontrip">
                        <button className='presentation_container_text_btn'>Begin my trip now !</button>
                    </Link>
                </div>
            </div>

            <div className='presentation_container'>
                <div className='presentation_container_text'>
                    <h2 className='presentation_container_text_title'>They witness</h2>
                    <p className='presentation_container_text_speech'>Unknown or prominent personalities, they testify to their experience of MindTrip</p>
                    <Link to="/tontrip">
                        <button className='presentation_container_text_btn'>Begin my trip now !</button>
                    </Link>
                </div>
                <div className='presentation_container_slider'>
                    <Slider3 />
                </div>
            </div>




        </div>
    );
};

export default Presentation;