import React from 'react'
import Navbar from '../components/navbar/Navbar';
import Header from '../components/header/Header'
import Presentation from '../components/presentation/Presentation'


function Home() {
    return (
        <div className='home'>

            <Navbar />
            <Header />
            <Presentation />

        </div>
    )
}

export default Home;