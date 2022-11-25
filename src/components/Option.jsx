import React, { useState } from 'react'
import MixageImg from './MixageImg'

const star = [
    {
        id: 0,
        name: "No star please",
        price: 0,
        tag: ""

    }, {
        id: 1,
        name: "Nathalie Portman",
        price: 5000,
        tag: " a nice brunette",

    },
    {
        id: 2,
        name: "Dave",
        price: 100,
        tag: "a middle age blond man from the seventies "

    },
    {
        id: 3,
        name: "Halle Berry",
        price: 4000,
        tag: 'a very nice afro-american woman with clear skin'

    },
    {
        id: 4,
        name: "Gérald Darmanin",
        price: -1800,
        tag: "an ugly politian with short black and white hair"

    },
    {
        id: 5,
        name: "Maggie Q",
        price: 3500,
        tag: "a nice asian woman with long hair"

    },
    {
        id: 6,
        name: "Jules César",
        price: 3500,
        tag: "Julius Caesar"

    }
]

const animal = [
    {
        id: 0,
        name: "No pet please",
        price: 0,
        tag: ""


    }, {
        id: 1,
        name: "Dog",
        price: 100,
        tag: " a lovely dog"

    },
    {
        id: 2,
        name: "Cat",
        price: 50,
        tag: " a lovely cat"

    },
    {
        id: 3,
        name: "T-rex",
        price: 2500,
        tag: " an angry t-rex"

    }
]

const time = [
    {
        id: 1,
        name: "1 hour",
        price: 1500,

    },
    {
        id: 2,
        name: "4 hours",
        price: 3500

    },
    {
        id: 3,
        name: "8 hours",
        price: 5000

    },
    {
        id: 4,
        name: "12 hours",
        price: 8000

    },
    {
        id: 5,
        name: "1 day",
        price: 10000

    }
]

const period = [
    {
        id: 1,
        name: "jurassic",
        price: 2000,
        tag: "during the jurassic age"

    },
    {
        id: 2,
        name: "middle-age",
        price: 1500,
        tag: "during the middle-age, in middle-age drawing style"

    },
    {
        id: 3,
        name: "futur",
        price: 1000,
        tag: " in the future, with lots of colors and lights"


    },
    {
        id: 4,
        name: "18th century",
        price: 1000,
        tag: "during the 18th century, with an 18th century oil painting style"

    },
    {
        id: 5,
        name: "present day",
        price: 800,
        tag: "in present day, with a realistic style"

    }
]

const place = [
    {
        id: 1,
        name: "mars",
        price: 2000,
        tag: "on the surface of planet mars"

    },
    {
        id: 2,
        name: "moon",
        price: 1500,
        tag: "on the moon with the Earth in the sky and stars"

    },
    {
        id: 3,
        name: "island",
        price: 2000,
        tag: "on a beautiful and shinny beach in the Caribbean with a coconut tree and blue water"


    },
    {
        id: 4,
        name: "mountain",
        price: 1000,
        tag: "on a mountain with tall trees and nice gray rocks and a sunny sky"

    },
    {
        id: 5,
        name: "country side",
        price: 800,
        tag: "in a farm with farm animals, straw, green grass and a red barn"

    }
]

function Option({ tarif }) {

    const [selectStar, setSelectStar] = useState(0);
    const [selectPet, setSelectPet] = useState(0);
    const [selectTime, setSelectTime] = useState(1500);
    const [selectPeriod, setSelectPeriod] = useState(2000);
    const [selectPlace, setSelectPlace] = useState(2000);
    const [tag1, setTag1] = useState("non defini");
    const [tag2, setTag2] = useState("non defini");
    const [tag3, setTag3] = useState("non defini");
    const [tag4, setTag4] = useState("non defini");
    const [tag5, setTag5] = useState("non defini");
    const [tag6, setTag6] = useState("non defini");


    const tagChoice = (tableau, valeur) => {
        let temp = "";
        for (let i = 0; i < tableau.length; i++) {
            if (valeur == tableau[i].price) {
                temp = tableau[i].tag;
            }
        }
        return temp;
    }


    const handleChange1 = (event) => {
        setSelectStar(event.target.value);
        setTag1(tagChoice(star, event.target.value));
    };

    const handleChange2 = (event) => {
        setSelectPet(event.target.value);
        setTag2(tagChoice(animal, event.target.value));

    };
    const handleChange3 = (event) => {
        setSelectTime(event.target.value);
        setTag3(tagChoice(time, event.target.value));

    };

    const handleChange4 = (event) => {
        setSelectPeriod(event.target.value);
        setTag4(tagChoice(period, event.target.value));

    };

    const handleChange5 = (event) => {
        setSelectPlace(event.target.value);
        setTag5(tagChoice(place, event.target.value));

    };

    // console.log(selectPet)
    // console.log(selectStar)
    // console.log(selectTime)
    // console.log(selectPeriod)
    // console.log(selectPlace)

    const finalTag = `picture of ${tag1} ${tag2} ${tag3} ${tag4} ${tag5}`;

    const tarifOption =
        tarif + parseInt(selectTime) + parseInt(selectPet) + parseInt(selectStar) + parseInt(selectPeriod) + parseInt(selectPlace);

    // console.log(tarifOption)

    return (
        <div className='option'>
            <h1>Select your DreamTrip options</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam ipsa consequatur sint non quia odio, voluptas quis nam doloremque labore accusantium illo error modi voluptatibus dolorem debitis maiores laudantium?</p>
            <form className='optionContainer'>

                <div className='optionCard'>
                    <h2>Travel with star ✨</h2>

                    <label htmlFor='starsList'>Yes! But who?</label>
                    <select onChange={handleChange1} id="starsList">
                        {star.map((star) => (
                            <option key={star.id} value={star.price}>{star.name}</option>
                        ))}
                    </select>
                </div>


                <div className='optionCard'>
                    <h2>Travel with a pet 🐺</h2>
                    <label htmlFor='animalList'>Yes! but which one?</label>
                    <select onChange={handleChange2} id="animalList">
                        {animal.map((pet) => (
                            <option key={pet.id} value={pet.price}>{pet.name}</option>
                        ))}
                    </select>
                </div>


                <div className='optionCard'>
                    <h2>Dream length</h2>
                    <label htmlFor='lengthList'>How long? ⏲️</label>
                    <select onChange={handleChange3} id="lengthList">
                        {time.map((time) => (
                            <option key={time.id} value={time.price} >{time.name}</option>
                        ))}
                    </select>
                </div>

                <div className='optionCard'>
                    <h2>Period</h2>
                    <label htmlFor='lengthList'>In which period ⏲️</label>
                    <select onChange={handleChange4} id="lengthList">
                        {period.map((era) => (
                            <option key={era.id} value={era.price}>{era.name}</option>
                        ))}
                    </select>
                </div>
                <div className='optionCard'>
                    <h2>Place of  DreamTrip</h2>
                    <label htmlFor='lengthList'>Where? ⏲️</label>
                    <select onChange={handleChange5} id="lengthList">
                        {place.map((place) => (
                            <option key={place.id} value={place.price}>{place.name}</option>
                        ))}
                    </select>
                </div>
            </form>

            <p className='prixFinal'>Prix TTC options incluses en Zeni {tarifOption} Ƶ</p>
            <MixageImg finalTag={finalTag} />
        </div>
    )
}

export default Option