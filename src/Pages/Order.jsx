import React from 'react';
import { useParams } from 'react-router-dom';

function Order() {
    const { id } = useParams();
    return (
        <div className='order'>
            <h2>
                Thanks for your choice !
            </h2>
            <h3> Your travel price is {id}  Ƶ</h3>
        </div>
    )
}

export default Order;