import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Configuration, OpenAIApi } from "openai";


const MixageImg = () => {


    const configuration = new Configuration({
        apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    const [userPrompt, setUserPrompt] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const generateImage = async () => {

        const response = await openai.createImage({
            prompt: userPrompt,
            n: 1,
            size: "512x512",
        });
        console.log(response);
        const urlData = response.data.data[0].url

        setImageUrl(urlData);

    };
    console.log(userPrompt);

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