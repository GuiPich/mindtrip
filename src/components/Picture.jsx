import React from 'react';

const Picture = ({ name, url }) => {
    return (
        <div className='picture'>
            <img src={url} alt={name}></img>
        </div>
    );
};

export default Picture;