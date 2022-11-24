import React from 'react';
import Picture from './Picture';

const Pool = ({ name, url }) => {
    return (
        <div>
            <div>
                <img src={url} alt={name}></img>
            </div>
            <div>
                <img src={url} alt={name}></img>
            </div>
        </div>
    );
};
export default Pool;