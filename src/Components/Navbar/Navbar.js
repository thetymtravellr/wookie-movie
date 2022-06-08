import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className='navbar'>
                <Link to='/'>
                    Wookie
                    <br />
                    Movies
                </Link>
           <nav>
           <div className='search-box'>
                <button>search</button>
                <input type="text" />
            </div>
            <Link to='/bookmark'>Bookmarks</Link>
           </nav>

        </header>
    );
};

export default Navbar;