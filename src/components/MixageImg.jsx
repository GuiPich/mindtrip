import React, { useEffect, useState } from 'react';
import mergeImages from 'merge-images';
import landscape from '../assets/MixageImg/landscape.jpg';
import sheep from '../assets/MixageImg/sheep.jpg';

const MixageImg = () => {

    const [src, setSrc] = useState();

    const createImgMerge = () => {
        mergeImages([landscape, sheep])
            .then((res) => {
                setSrc(res)
            })
            .catch((err) => {
                console.error(err);
            })
    };

    useEffect(() => {
        createImgMerge()
    }, [])


    return (
        <div className='mixageImg'>

        </div>
    )
}

export default MixageImg;