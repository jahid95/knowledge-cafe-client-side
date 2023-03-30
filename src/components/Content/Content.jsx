import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Side from '../Side/Side';
import './Content.css'


const Main = () => {
    const [books, setBooks] = useState([])
    const [bookmark, setBookmark] = useState([])

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    const handleBookMark =(book) =>{
        const same = bookmark.find(s => s===book);
        if(same){
            alert('already bookmarked')
            return;
        }
        const newArray =[...bookmark, book];      
        setBookmark(newArray)
    }
    return (
        <div className='content-container'>
            <div className='books-container'>
            {
                books.map(book => <Cart book={book} handleBookMark={handleBookMark}></Cart>)
            }
            </div>
            <div className='bookmark-conatiner'>
                <Side bookmark={bookmark}></Side>         
            </div>

            
        </div>
    );
};

export default Main;