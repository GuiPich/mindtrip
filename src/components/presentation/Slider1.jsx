import React from 'react';
import C from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const sliderData = [
    {
        id: 1,
        picture: "/assets/mad/mad1.jpg",
    },
    {
        id: 2,
        picture: "/assets/mad/mad2.jpg",
    },
    {
        id: 3,
        picture: "/assets/mad/mad3.jpg",
    },
    {
        id: 4,
        picture: "/assets/mad/mad4.jpg",
    }
];

const responsive = {
    desktop: {
        breakpoint: { max: 4000, min: 375 },
        items: 1,
        slidesToSlide: 1,
    },
    mobile: {
        breakpoint: { max: 375, min: 0 },
        items: 1,
        slidesToSlide: 1,
    },
};


const Slider1 = () => {

    const Carousel = C.default ? C.default : C;

    return (
        <div className='slider'>
            <Carousel
                containerClass="slider_carousel"
                responsive={responsive}
                infinite
                autoPlay
                autoPlaySpeed={4000}
            >
                {sliderData.map((infos) => {
                    return (
                        <img
                            key={infos.id}
                            className="slider_carousel_img"
                            src={infos.picture}
                            alt={infos.id}
                        />
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Slider1;