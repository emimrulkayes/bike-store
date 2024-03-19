import React from 'react';
import Products from '../Products/Products';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Products></Products>
            <Blogs></Blogs>
        </>
    );
};

export default Home;