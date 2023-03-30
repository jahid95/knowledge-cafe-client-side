import React from 'react';
import './Side.css'

const Side = ({bookmark}) => {
    console.log('inside side', bookmark);
    return (
        <div className='bookmark-container'>
            <h4 className='spent-time'>Spent time on read: {} min</h4>
            <div className='bookmark-blogs'>
                <h2>Bookmarked Blogs:{bookmark.length}</h2>
                {
                    bookmark.map(mark => <p>{mark}</p>)
                }
            </div>
        </div>
    );
};

export default Side;