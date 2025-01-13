import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../assets/img/404.png'

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center flex-col h-screen'>
            <img src={errorImg} alt="" srcset="" />
            <h2 className='font-bold text-2xl py-3'>Oops! Page Not Found</h2>
            <Link className='text-2xl font-bold text-success' to="/">Go back to home</Link>
        </div>
    );
};

export default ErrorPage;