import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Configuration, OpenAIApi } from "openai";


const MixageImg = ({ finalTag }) => {


    const configuration = new Configuration({
        apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    const [userPrompt, setUserPrompt] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    console.log(finalTag);

    const generateImage = async () => {

        const response = await openai.createImage({
            prompt: finalTag,
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