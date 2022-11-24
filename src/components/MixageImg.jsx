import React, { useState } from 'react';
import logo from '../assets/logo.png';


const MixageImg = () => {

    const { Configuration, OpenAIApi } = require("openai");
    const configuration = new Configuration({
        apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    const [userPrompt, setUserPrompt] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const generateImage = async () => {
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
                onChange={(e) => setUserPrompt(e.target.value)}
            />
            <button onClick={() => generateImage()}>Generate</button>
        </div>
    )
}

export default MixageImg;