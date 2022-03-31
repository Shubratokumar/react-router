import React from 'react';
// import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h2>Welcome to my fancy Routing !!</h2>
            <nav>
                {/* <Link to = '/'>Home</Link>
                <Link to = '/friend'>Friends</Link>
                <Link to = '/about'>About</Link> */}
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">Friend</CustomLink>
                <CustomLink to="/posts">Posts</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;