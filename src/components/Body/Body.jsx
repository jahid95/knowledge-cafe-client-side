import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';


const Main = () => {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])
    return (
        <div>
            {
                books.map(book => <Cart book={book}></Cart>)
            }
            
        </div>
    );
};

export default Main;