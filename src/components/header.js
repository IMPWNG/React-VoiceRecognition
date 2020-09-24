import React from 'react';
import Link from 'gatsby-link';
import "./layout.css";

const Header = () => {
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/news'>News</Link>
                <Link to='/marketing'>Marketing</Link>
            </nav>

        </>
    )   
}



export default Header;