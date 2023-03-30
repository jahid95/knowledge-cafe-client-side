import React from 'react';
import './Side.css'

const Side = () => {
    return (
        <div className='bookmark-container'>
            <h4 className='spent-time'>Spent time on read: {} min</h4>
            <div className='bookmark-blogs'>
                <h2>Bookmarked Blogs:</h2>
            </div>
        </div>
    );
};

export default Side;