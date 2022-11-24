import React from 'react';
import C from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const sliderData = [
    {
        id: 1,
        picture: "/assets/portrait/portrait1.jpg",
        quote: "Nice trip ! I always dream to be a big man...",
        name: "Nicolas S. :"
    },
    {
        id: 2,
        picture: "/assets/portrait/portrait2.jpg",
        quote: "To have been really intelligent for the first time in my life during this vacation was a transatizing experience.",
        name: "Gérald D. :"
    },
    {
        id: 3,
        picture: "/assets/portrait/portrait3.jpg",
        quote: "Before I had a black friend, now I was black !",
        name: "Jean-marie L. :"
    },
    {
        id: 4,
        picture: "/assets/portrait/portrait4.jpg",
        quote: "Eat some Pig !",
        name: "Jonathan S. :"
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


const Slider3 = () => {

    const Carousel = C.default ? C.default : C;

    return (
        <div className='slider3'>
            <Carousel
                containerClass="slider3_carousel"
                responsive={responsive}
                infinite
                autoPlay
                autoPlaySpeed={6000}
            >
                {sliderData.map((infos) => {
                    return (
                        <div className='slider3_carousel_box'>
                            <p className='slider3_carousel_box_quote'>{infos.name} <br /> {infos.quote}  </p>
                            <img
                                key={infos.id}
                                className="slider3_carousel_box_img"
                                src={infos.picture}
                                alt={infos.id}
                            />

                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Slider3;