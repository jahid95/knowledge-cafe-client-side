import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='nav'>
            <div className='header-logo'>
            <img className='logo-img' src="https://cdn-icons-png.flaticon.com/512/3145/3145765.png" alt="" />
                <h2><span></span>BooksBlog.com</h2>
            </div>
                <div className="nav-items">
                    <a href="#books">Books</a>
                    <a href="#blogs">Blogs</a>
                    <a href="https://web.facebook.com/anwar.jahid.5055/">
                        <img src="https://scontent.fdac1-1.fna.fbcdn.net/v/t1.6435-9/50170540_1016461651884986_2061988767740198912_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGKBbw-dS4r-q9392svLCH2LBN_peh3-ycsE3-l6Hf7JwBRa418Jze8_-PXycPZT6fJ85d-fBgMQ0CkiEZGe_bJ&_nc_ohc=cIM9NEWOwJUAX-5UCe5&_nc_ht=scontent.fdac1-1.fna&oh=00_AfAeSV06fOub3uxYpCRcPafYUWVFISraw9eeg9M6JqaNdw&oe=644E5714" alt="" />
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Header;