import React, { useState, useEffect } from 'react';
import Picture from './Picture';
import Pool from './Pool';

const destination = [
    {
        id: 1,
        name: 'mars',
        url: 'https://www.quebecscience.qc.ca/wp-content/uploads/2018/09/20110914145921-marspaysage.jpg',
    },
    {
        id: 2,
        name: 'plage',
        url: 'https://resize.prod.femina.ladmedia.fr/r/,550/img/var/2021-06/plage-de-saleccia-santo-pietro-di-tenda.jpg',
    },
    {
        id: 3,
        name: 'centralperk',
        url: 'https://m.media-amazon.com/images/I/51rkb2jXLqL._AC_SX425_.jpg',
    },
    {
        id: 4,
        name: 'southpark',
        url: 'https://thumbs.dreamstime.com/b/caract%C3%A8res-de-south-park-31908389.jpg',
    },
    {
        id: 5,
        name: 'lunenoire',
        url: 'https://trustmyscience.com/wp-content/uploads/2016/12/star-wars-%C3%A9toile-noire.jpg',
    }];
const access = [
    {
        id: 6,
        name: 'trotinette',
        url: 'https://i.ebayimg.com/images/g/3s0AAOSwfYNgTiU0/s-l400.jpg',
    },
    {
        id: 7,
        name: 'canon',
        url: 'https://www.shutterstock.com/image-illustration/human-cannonball-on-white-background-260nw-133645379.jpg',
    },
    {
        id: 8,
        name: 'licorne',
        url: 'https://www.le-monde-du-stickers.fr/5444/sticker-chambre-licorne-coeur-arc-en-ciel.jpg',
    },
    {
        id: 9,
        name: 'doloreane',
        url: 'https://www.yvelines-infos.fr/content/uploads/2018/35792938-2098687413742839-5443431844324311040-o-e1535381102582.jpg',
    },
    {
        id: 10,
        name: 'flash',
        url: 'https://static.hitek.fr/img/actualite/w_flash-4.jpg',
    }];
const who = [
    {
        id: 11,
        name: 'kenny',
        url: 'http://www.ulyces.co/wp-content/uploads/2017/09/south_park_action_poses___kenny_21_by_megasupermoon-d6b631i-400x508.jpg',
    },
    {
        id: 12,
        name: 'Alban',
        url: 'https://cinefeel.me/medias/people/a2923e7602451f0cebd0b9dd67a28f50.jpg',
    },
    {
        id: 13,
        name: 'fauxbatman',
        url: 'http://1.bp.blogspot.com/_MsAlYewfMUI/TQSZQUj5zvI/AAAAAAAAC6g/SIrzDiGO7OM/s1600/batman-cosplay.jpg',
    },
    {
        id: 14,
        name: 'scrat',
        url: 'https://vl-media.fr/wp-content/uploads/2022/02/Scrat.jpg',
    },
    {
        id: 15,
        name: 'harleyquinn',
        url: 'https://m.media-amazon.com/images/I/51IIevCpbgL._AC_.jpg',
    }];
const Query = () => {
    const [query, setQuery] = useState('');
    const [choice, setChoice] = useState('');
    const [count, setCount] = useState(1);
    const [url, setUrl] = useState('');
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [question3, setQuestion3] = useState('');
    const handleQuery = (event) => {
        setQuery(event.target.value);
        console.log(query);
    };
    // const handleDetails = () => {
    //     console.log(count, question1, question2, question3);
    // };
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
                                            <Picture name={image.name} url={image.url} />
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
                                            <Picture name={image.name} url={image.url} />
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
                                            <Picture name={image.name} url={image.url} />
                                        </button>
                                    </div>
                                )
                            }
                        })}
                    </div>
                </div>
            }
            <Pool url1={question1} url2={question2} url3={question3} />
        </div>
    );
};

export default Query;