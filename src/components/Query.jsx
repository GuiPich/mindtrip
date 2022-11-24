import React, { useState, useEffect } from 'react';
import Picture from './Picture';
import Pool from './Pool';

const pictures = [
    {
        id: 1,
        name: 'mars',
        url: 'https://www.quebecscience.qc.ca/wp-content/uploads/2018/09/20110914145921-marspaysage.jpg',
    },
    {
        id: 2,
        name: 'cheval',
        url: 'https://www.classequine.com/wp-content/uploads/2021/03/Haflinger.jpg',
    },
    {
        id: 3,
        name: 'mojito',
        url: 'https://www.monin.com/media/catalog/product/cache/086f110b92ec89cebc323a4780ab42bd/4/2/42240b83-6ed9-438c-ae84-19872c89f777-2.png',
    },
    {
        id: 4,
        name: 'skate',
        url: 'https://cdn.skatepro.com/product/440/chocolate-og-chunk-complete-skateboard-wf.jpg',
    },
    {
        id: 5,
        name: 'kenny',
        url: 'http://www.ulyces.co/wp-content/uploads/2017/09/south_park_action_poses___kenny_21_by_megasupermoon-d6b631i-400x508.jpg',
    }
];

const Query = () => {
    const [query, setQuery] = useState('');
    const [choice, setChoice] = useState('');
    const [active, setActive] = useState(false);

    const handleQuery = (event) => {
        setQuery(event.target.value);
        console.log(query);
    };
    const handleSend = () => {
        setChoice(query);
    };
    const choicePicture = () => {
        setActive(true);
    }
    return (
        <div className='container'>
            <label htmlFor="name">Votre recherche:</label>
            <input type="text" id="name" name="name" onChange={handleQuery}></input>
            <button type='submit' onClick={handleSend}>OK</button>
            {pictures.map(image => {
                if (image.id == choice || image.name == choice) {
                    return (
                        <div className='pictureDiv'>
                            <button type='submit' className='buttonPicture' onClick={choicePicture}>
                                <Picture name={image.name} url={image.url} />
                            </button>
                            {active && (<Pool name={image.name} url={image.url} />)}
                        </div>
                    )
                }
            })}
        </div>
    );
};
export default Query;