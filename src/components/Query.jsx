import React, { useState, useEffect } from 'react';
import Picture from './Picture';
import Pool from './Pool';
import { Link } from 'react-router-dom';

const destination = [
    {
        id: 1,
        name: 'mars',
        url: 'https://cdn.pixabay.com/photo/2012/11/28/09/08/mars-67522_1280.jpg',
        description: 'Sur Mars',
    },
    {
        id: 2,
        name: 'plage',
        url: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg',
        description: 'A la plage',
    },
    {
        id: 3,
        name: 'centralperk',
        url: 'https://m.media-amazon.com/images/I/51rkb2jXLqL._AC_SX425_.jpg',
        description: 'Au Central Perk',
    },
    {
        id: 4,
        name: 'southpark',
        url: 'https://thumbs.dreamstime.com/b/caract%C3%A8res-de-south-park-31908389.jpg',
        description: 'A South Park',
    },
    {
        id: 5,
        name: 'Etoile de la mort',
        url: 'https://trustmyscience.com/wp-content/uploads/2016/12/star-wars-%C3%A9toile-noire.jpg',
        description: 'Sur l\'étoile de la mort',
    }];
const access = [
    {
        id: 6,
        name: 'trotinette',
        url: 'https://i.ebayimg.com/images/g/3s0AAOSwfYNgTiU0/s-l400.jpg',
        description: 'En trotinette',
    },
    {
        id: 7,
        name: 'canon',
        url: 'https://www.shutterstock.com/image-illustration/human-cannonball-on-white-background-260nw-133645379.jpg',
        description: 'Façon homme canon',
    },
    {
        id: 8,
        name: 'licorne',
        url: 'https://www.le-monde-du-stickers.fr/5444/sticker-chambre-licorne-coeur-arc-en-ciel.jpg',
        description: 'En licorne',
    },
    {
        id: 9,
        name: 'delorean',
        url: 'https://www.yvelines-infos.fr/content/uploads/2018/35792938-2098687413742839-5443431844324311040-o-e1535381102582.jpg',
        description: 'En DeLorean volante',
    },
    {
        id: 10,
        name: 'flash',
        url: 'https://static.hitek.fr/img/actualite/w_flash-4.jpg',
        description: 'En courant',
    }];
const who = [
    {
        id: 11,
        name: 'kenny',
        url: 'http://www.ulyces.co/wp-content/uploads/2017/09/south_park_action_poses___kenny_21_by_megasupermoon-d6b631i-400x508.jpg',
        description: 'Kenny',
    },
    {
        id: 12,
        name: 'Alban',
        url: 'https://cinefeel.me/medias/people/a2923e7602451f0cebd0b9dd67a28f50.jpg',
        description: 'Le père de Lucas',
    },
    {
        id: 13,
        name: 'fauxbatman',
        url: 'http://1.bp.blogspot.com/_MsAlYewfMUI/TQSZQUj5zvI/AAAAAAAAC6g/SIrzDiGO7OM/s1600/batman-cosplay.jpg',
        description: 'Un faux Batman',
    },
    {
        id: 14,
        name: 'scrat',
        url: 'https://vl-media.fr/wp-content/uploads/2022/02/Scrat.jpg',
        description: 'Scrat',
    },
    {
        id: 15,
        name: 'harleyquinn',
        url: 'https://m.media-amazon.com/images/I/51IIevCpbgL._AC_.jpg',
        description: 'La vraie Harley Quinn',
    }];
const Query = () => {
    const [query, setQuery] = useState('');
    const [count, setCount] = useState(1);
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [question3, setQuestion3] = useState('');
    useEffect(() => {
        console.log(count);
    }, [count]);

    return (
        <div className='query'>
            {/* <button type='submit' onClick={handleDetails}>Details</button> */}
            {count == 1 &&
                <div className='query_return'>
                    <h1>Quel est votre destination?</h1>
                    <div className='query_return_proposition'>
                        {destination.map((image) => {
                            if (true) {
                                return (
                                    <div >
                                        <button type='submit' className='query_return_button' onClick={event => {
                                            setCount(count + 1);
                                            setQuestion1(image.url)
                                        }}>
                                            <Picture name={image.name} url={image.url} description={image.description} />
                                        </button>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            }
            {count == 2 &&
                <div className='query_return'>
                    <h1>Quel moyen de transport?</h1>
                    <div className='query_return_proposition'>
                        {access.map(image => {
                            if (true) {
                                return (
                                    <div >
                                        <button type='submit' className='query_return_button' onClick={event => {
                                            setCount(count + 1);
                                            setQuestion2(image.url)
                                        }}>
                                            <Picture name={image.name} url={image.url} description={image.description} />
                                        </button>
                                    </div>
                                )
                            }
                        })}</div>
                </div>
            }
            {count == 3 &&
                <div className='query_return'>
                    <h1>Avec qui?</h1>
                    <div className='query_return_proposition'>
                        {who.map(image => {
                            if (true) {
                                return (
                                    <div >
                                        <button type='submit' className='query_return_button' onClick={event => {
                                            setQuestion3(image.url)
                                        }}>
                                            <Picture name={image.name} url={image.url} description={image.description} />
                                        </button>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            }
            <Pool url1={question1} url2={question2} url3={question3} />
            <div className='query_link'>
                <Link to="/commande">
                    <button type='submit' className='query_link_button'>Validation</button>
                </Link>
            </div>
        </div>
    );
};

export default Query;