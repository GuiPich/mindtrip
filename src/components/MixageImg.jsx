import React, { useState } from 'react';
import logo from '../assets/logologo.jpg';

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.REACT_APP_API_KEY,
});
const openai = new OpenAIApi(configuration);


const MixageImg = () => {

    const [userPrompt, setUserPrompt] = useState("");

    const [imageUrl, setImageUrl] = useState("");

    const aa = () => {
        setUserPrompt();
    };


    const generatePosterCard = async () => {
        const imageParameters = {
            prompt: userPrompt,
            n: 1,
            size: "256x256",
        }
        const response = await openai.createImage(imageParameters);
        const urlData = response.data.data[0].url
        console.log(urlData);
        setImageUrl(urlData);

    };

    return (
        <div className='mixageImg'>
            {
                imageUrl
                    ? <img src={imageUrl} className="image" alt="ai thing" />
                    : <img src={logo} className="image" alt="logo" />
            }

            <input
                placeholder='A sunset on the Sydney Opera House'
                onClick={generatePosterCard}
            />
            <button>Generate</button>
        </div>
    )
}

export default MixageImg;