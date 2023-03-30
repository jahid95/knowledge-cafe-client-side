import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Side from '../Side/Side';
import './Content.css'


const Main = () => {
    const [books, setBooks] = useState([])
    const [bookmark, setBookmark] = useState([])
    const [time, setTime] = useState([])

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

    const handleReadTime = (readTime) =>{
        const newTime = [...time, readTime];
        setTime(newTime)
    }
    return (
        <div className='content-container'>
            <div className='books-container'>
            {
                books.map(book => <Cart book={book} handleBookMark={handleBookMark} handleReadTime={handleReadTime}></Cart>)
            }
            </div>
            <div className='bookmark-conatiner'>
                <Side bookmark={bookmark} time={time}></Side>         
            </div>

            
        </div>
    );
};

export default Main;