import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Home = () => {
    return (
        <>
            <Header/>
            <h1> Hii from React </h1>
            <h2> React App</h2>
            <Footer year="2021" month="July"/>
        </>
    )
}

export default Home;

// home is parent
// header and footer is child