import React from 'react';

const Picture = ({ name, url }) => {
    return (
        <div >
            <img src={url} alt={name} className='picture'></img>
        </div>
    );
};

export default Picture;