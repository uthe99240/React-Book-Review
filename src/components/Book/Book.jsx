import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link, NavLink } from 'react-router-dom';

const Book = ({ book }) => {
    const { bookId, image, tags, bookName, author, category, rating } = book;

    return (
        <NavLink to={`/book-details/${bookId}`}>
            <div className='border border-gray-300 p-4 rounded-lg'>
                <div className='flex justify-center bg-gray-200 p-4 rounded-lg'>
                    <img className='w-40' src={image} alt="" srcset="" />
                </div>
                <div className='mt-4'>
                    {
                        tags.map((tag,index) => <span key={index} className='text-[#23BE0A] me-3 p-2 bg-green-100 rounded-lg'>{tag}</span>)
                    }
                    <h2 className='text-2xl mt-3 font-semibold'>{bookName}</h2>
                    <p className='border-b-2 border-dashed pb-3'>By : {author}</p>
                    <div className='flex justify-between mt-3'>
                        <p>{category}</p>
                        <p className='flex items-center'>{rating} <CiStar className='ms-2 text-xl' /></p>
                    </div>
                </div>

            </div>
        </NavLink>

    );
};

export default Book;