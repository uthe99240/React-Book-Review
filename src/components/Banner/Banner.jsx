import React from 'react';
import img from '../../../public/assets/img/banner-book-img.jpg'
import { NavLink } from 'react-router-dom';

const Banner = () => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-4 bg-gray-200 p-24 rounded-lg">
                <div className='col-span-2 flex flex-col justify-center'>
                    <div>
                        <h2 className='text-5xl font-semibold'>Books to freshen up
                            your bookshelf</h2>
                        <NavLink to='/listed'><p className="btn me-2 bg-[#23BE0A] text-white border-none font-bold mt-12 px-8"> View The List</p></NavLink>
                    </div>
                </div>
                <div>
                    <img className='rounded' src={img} alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;