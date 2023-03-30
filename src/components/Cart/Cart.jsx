import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Cart = ({book, handleBookMark, handleReadTime}) => {
    
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
                   <div className='read-time'>
                   <h4>{readTime} min read ...</h4>
                    <button onClick={()=>handleBookMark(bookName)} className='btn-bookmark'><img src="../../../public/bookmark-regular.svg" alt="" /></button>
                   </div>

                </div>
            </div>
            <h2>{bookName}</h2>
            <button onClick={()=>handleReadTime(readTime)}>Mark as read...</button>
        </div>
    );
};

export default Cart;