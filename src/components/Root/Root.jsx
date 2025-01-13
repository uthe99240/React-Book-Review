import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Header></Header>
            <Outlet />
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Root;