import React from 'react';
import './Side.css'

const Side = ({bookmark, time}) => {
    console.log(time, bookmark);
    let sum=0;
    for(const t of time){
        sum = sum + t;
    }
    
    return (
        <div className='bookmark-container'>
            <h4 className='spent-time'>Spent time on read: {sum} min</h4>
            <div className='bookmark-blogs'>
                <h2>Bookmarked Blogs:{bookmark.length}</h2>
                {
                    bookmark.map(mark => <p className='bookmark-item'>{mark}</p>)
                }
            </div>
        </div>
    );
};

export default Side;