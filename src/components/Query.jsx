import React, { useState, useEffect } from 'react';
import Picture from './Picture';
import Pool from './Pool';
import { Link } from 'react-router-dom';
import Commande from '../Pages/Commande';

const destination = [
    {
        id: 1,
        name: 'mars',
        url: 'https://cdn.pixabay.com/photo/2022/01/30/13/39/mars-6980902_1280.jpg',
        description: 'On Mars',
    },
    {
        id: 2,
        name: 'plage',
        url: 'https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_1280.jpg',
        description: 'At the beach',
    },
    {
        id: 3,
        name: 'centralperk',
        url: 'https://m.media-amazon.com/images/I/51rkb2jXLqL._AC_SX425_.jpg',
        description: 'At Central Perk',
    },
    {
        id: 4,
        name: 'southpark',
        url: 'https://thumbs.dreamstime.com/b/caract%C3%A8res-de-south-park-31908389.jpg',
        description: 'At South Park',
    },
    {
        id: 5,
        name: 'Etoile de la mort',
        url: 'https://trustmyscience.com/wp-content/uploads/2016/12/star-wars-%C3%A9toile-noire.jpg',
        description: 'On the Death Star',
    }];
const access = [
    {
        id: 6,
        name: 'trotinette',
        url: 'https://i.ebayimg.com/images/g/3s0AAOSwfYNgTiU0/s-l400.jpg',
        description: 'With scooter',
    },
    {
        id: 7,
        name: 'char',
        url: 'https://www.sainthilairenautisme.fr/wp-content/uploads/2021/03/char-a-voile-3.jpg',
        description: 'With yachting',
    },
    {
        id: 8,
        name: 'licorne',
        url: 'https://www.le-monde-du-stickers.fr/5444/sticker-chambre-licorne-coeur-arc-en-ciel.jpg',
        description: 'On Unicorn',
    },
    {
        id: 9,
        name: 'delorean',
        url: 'https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2017/08/deloreanvolante-770__w770.jpg',
        description: 'With The DeLorean',
    },
    {
        id: 10,
        name: 'flash',
        url: 'https://static.hitek.fr/img/actualite/w_flash-4.jpg',
        description: 'By Running',
    }];
const who = [
    {
        id: 11,
        name: 'kenny',
        url: 'https://i.pinimg.com/originals/a3/bb/ea/a3bbea5f04100b7c640380a5812ec636.png',
        description: 'Kenny',
    },
    {
        id: 12,
        name: 'Chuck Norris',
        url: 'https://www.nanarland.com/uploads/content/acteurs/chucknorris/xchucknorris.jpg.pagespeed.ic.y1g-A3N3se.webp',
        description: 'Chuck Norris',
    },
    {
        id: 13,
        name: 'fauxbatman',
        url: 'http://1.bp.blogspot.com/_MsAlYewfMUI/TQSZQUj5zvI/AAAAAAAAC6g/SIrzDiGO7OM/s1600/batman-cosplay.jpg',
        description: 'A fake Batman',
    },
    {
        id: 14,
        name: 'scrat',
        url: 'https://img2.freepng.fr/20180325/hpe/kisspng-scrat-ice-age-village-manfred-sid-diego-ice-age-5ab75c4a8cb594.2613319415219661545764.jpg',
        description: 'Scrat',
    },
    {
        id: 15,
        name: 'Wonderwoman',
        url: 'https://fr.web.img2.acsta.net/c_310_420/pictures/19/02/01/20/49/5136728.jpg',
        description: 'Wonderwoman',
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
                    <h1>What is your destination?</h1>
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
                    <h1>With what means of transportation?</h1>
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
                    <h1>Who tou want to trip with?</h1>
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

            <Commande />
        </div>
    );
};

export default Query;