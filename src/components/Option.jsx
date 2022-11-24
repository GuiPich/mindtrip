import React, { useState } from 'react'

const star = [
    {
        id: 0,
        name: "No star please",
        price: 0

    }, {
        id: 1,
        name: "Nathalie Portman",
        price: 5000

    },
    {
        id: 2,
        name: "Dave",
        price: 100

    },
    {
        id: 3,
        name: "Halle Berry",
        price: 4000

    },
    {
        id: 4,
        name: "Gérald Darmanin",
        price: -1800

    },
    {
        id: 5,
        name: "Maggie Q",
        price: 3500

    },
    {
        id: 6,
        name: "Jules César",
        price: 3500

    }
]

const animal = [
    {
        id: 0,
        name: "No pet please",
        price: 0

    }, {
        id: 1,
        name: "Dog",
        price: 100

    },
    {
        id: 2,
        name: "Cat",
        price: 50

    },
    {
        id: 3,
        name: "T-rex",
        price: 2500

    }
]

const time = [
    {
        id: 1,
        name: "1 hour",
        price: 1500

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


function Option({ tarif }) {

    const [selectStar, setSelectStar] = useState()
    const [selectPet, setSelectPet] = useState()
    const [selectTime, setSelectTime] = useState()



    const handleChange1 = (event) => {
        setSelectStar(event.target.value);
    };

    const handleChange2 = (event) => {
        setSelectPet(event.target.value);
    };
    const handleChange3 = (event) => {
        setSelectTime(event.target.value);
    };

    console.log(selectPet)
    console.log(selectStar)
    console.log(selectTime)

    const tarifOption =
        tarif + parseInt(selectTime) + parseInt(selectPet) + parseInt(selectStar)

    console.log(tarifOption)

    return (
        <div className='option'>
            <h1>Selectionner vos options</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam ipsa consequatur sint non quia odio, voluptas quis nam doloremque labore accusantium illo error modi voluptatibus dolorem debitis maiores laudantium?</p>
            <form className='optionContainer'>

                <div className='optionCard'>
                    <h2>Partir avec une star</h2>

                    <label htmlFor='starsList'>avec qui?</label>
                    <select onChange={handleChange1} id="starsList">
                        {star.map((star) => (
                            <option key={star.id} value={star.price}>{star.name}</option>
                        ))}
                    </select>
                </div>


                <div className='optionCard'>
                    <h2>Partir avec un animal</h2>
                    <label htmlFor='animalList'>avec qui?</label>
                    <select onChange={handleChange2} id="animalList">
                        {animal.map((pet) => (
                            <option key={pet.id} value={pet.price}>{pet.name}</option>
                        ))}
                    </select>
                </div>


                <div className='optionCard'>
                    <h2>Dream length</h2>
                    <label htmlFor='lengthList'>How long?</label>
                    <select onChange={handleChange3} id="lengthList">
                        {time.map((time) => (
                            <option key={time.id} value={time.price}>{time.name}</option>
                        ))}
                    </select>
                </div>
            </form>

            <p>Prix TTC options incluses en Zeni {tarifOption} Ƶ</p>

        </div>
    )
}

export default Option