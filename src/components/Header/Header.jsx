import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='nav'>
                <h1>Book Store Online</h1>
                <div className="nav-items">
                    <a href="">Books</a>
                    <a href="">Blogs</a>
                    <a href="">
                        <img src="../../../public/anwar_jahid (2).png" alt="" />
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;