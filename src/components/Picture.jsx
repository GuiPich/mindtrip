import React from 'react';

const Picture = ({ name, url, description }) => {
    return (
        <div className='picture'>
            <img src={url} alt={name} className='picture_image'></img>
            <h4 className='picture_description'>{description}</h4>
        </div>
    );
};

export default Picture;