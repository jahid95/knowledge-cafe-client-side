import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='nav'>
            <div className='header-logo'>
            <img className='logo-img' src="../../../public/opened-book-3169.svg" alt="" />
                <h2><span></span>BooksBlog.com</h2>
            </div>
                <div className="nav-items">
                    <a href="#books">Books</a>
                    <a href="#blogs">Blogs</a>
                    <a href="https://web.facebook.com/anwar.jahid.5055/">
                        <img src="../../../public/anwar_jahid (2).png" alt="" />
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;