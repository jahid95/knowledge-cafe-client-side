import React from 'react';
import './Cart.css';

const Cart = ({book}) => {
    console.log(book);
    const {bookName,poster, writer, writerName, published, readTime} = book;

    return (
        <div className='cart-container'>
            <img src={poster} alt="" />
            
            <div className='writer-details'>
                <div className='writer-info'>
                    <img src={writer} alt="" />
                    <div className='writer-name'>
                        <h3>{writerName}</h3>
                        <p>{published}</p>

                    </div>

                </div>
                <div className='bookmark-info'>
                    <h4>{readTime} min read ...</h4>

                </div>
            </div>
            <h2>{bookName}</h2>
            <a href="">Mark as read...</a>
        </div>
    );
};

export default Cart;