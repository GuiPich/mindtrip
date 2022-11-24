import React, { useState } from 'react'

const star = [
    {
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
        price: 2

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

function Option() {

    const [selectStar, setSelectStar] = useState([])
    const [selectPet, setSelectPet] = useState([])

    const handleChange = (event) => {
        setSelectStar(event.target.value);
        setSelectPet(event.target.value);
    };

    console.log(selectStar)
    console.log(selectPet)
    return (
        <div className='option'>
            <h1>Selectionner vos options</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quibusdam ipsa consequatur sint non quia odio, voluptas quis nam doloremque labore accusantium illo error modi voluptatibus dolorem debitis maiores laudantium?</p>
            <form className='optionContainer'>

                <div className='optionCard'>
                    <h2>Partir avec une star</h2>

                    <label htmlFor='starsList'>avec qui?</label>
                    <select onChange={handleChange} id="starsList">
                        <option value="">---</option>
                        {star.map((star) => (
                            <option key={star.id} value={star.price}>{star.name}</option>
                        ))}
                    </select>
                </div>


                <div className='optionCard'>
                    <h2>Partir avec un animal</h2>
                    <label htmlFor='animalList'>avec qui?</label>
                    <select onChange={handleChange} id="animalList">
                        <option value="">---</option>
                        {animal.map((pet) => (
                            <option key={pet.id} value={pet.price}>{pet.name}</option>
                        ))}
                    </select>
                </div>


                <div className='optionCard'>
                    <h2>Dream length</h2>
                    <label htmlFor='lengthList'>How long?</label>
                    <select onChange={handleChange} id="lengthList">
                        <option value="">---</option>
                        {time.map((time) => (
                            <option key={time.id} value={time.price}>{time.name}</option>
                        ))}
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Option