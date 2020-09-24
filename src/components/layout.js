import React from 'react';
import PropTypes from "prop-types";
import Link from 'gatsby-link';

const Layout = ({children}) => {
    return (
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/app'>App</Link>
                <Link to='/marketing'>Marketing</Link>
            </nav>
             <main>
                {children}
            </main>
        </>
    )   
}



export default Layout;