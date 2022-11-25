import React from 'react';
import C from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const sliderData = [
    {
        id: 1,
        picture: "/assets/op/op2.jpg",
    },
    {
        id: 2,
        picture: "/assets/op/op3.jpg",
    },
    {
        id: 3,
        picture: "/assets/op/op4.png",
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


const Slider2 = () => {

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

export default Slider2;