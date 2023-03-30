import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Side from '../Side/Side';
import './Content.css'


const Main = () => {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div className='content-container'>
            <div className='books-container'>
            {
                books.map(book => <Cart book={book}></Cart>)
            }
            </div>
            <div className='bookmark-conatiner'>
            <Side></Side>
            </div>

            
        </div>
    );
};

export default Main;