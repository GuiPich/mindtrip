import React from 'react';

const Pool = ({ url1, url2, url3 }) => {
    return (
        <div className='pool' >
            <img src={url1} alt='' className='picture'></img>
            <img src={url2} alt='' className='picture'></img>
            <img src={url3} alt='' className='picture'></img>
        </div>
    );
};
export default Pool;