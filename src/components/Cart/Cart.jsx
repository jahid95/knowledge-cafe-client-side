import React from 'react';
import './Cart.css';

const Cart = ({book}) => {
    console.log(book);
    const {bookName,poster} = book;

    return (
        <div className='cart-container'>
            <img src={poster} alt="" />
            <h2>{bookName}</h2>
        </div>
    );
};

export default Cart;