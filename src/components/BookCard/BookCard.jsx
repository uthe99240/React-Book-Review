import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineUsers } from "react-icons/hi2";
import { RiPagesLine } from "react-icons/ri";
import { BsFileEarmarkPdf } from "react-icons/bs";
import { NavLink } from 'react-router-dom';

const BookCard = ({ book }) => {

    const { bookId, image, tags, bookName, author, category, rating, review, totalPages, yearOfPublishing, publisher } = book;

    return (
        <div className="p-4 border rounded shadow-sm bg-white flex items-center">
            <img
                src={image}
                alt={bookName}
                className="w-60 object-cover rounded mb-3 py-3 bg-gray-200 me-8"
            />
            <div className='mb-4'>
                <h2 className='text-2xl font-semibold'>{bookName}</h2>
                <p className='pb-3'>By : {author}</p>
                <div className='flex items-center'>
                    <strong className='me-3'>Tag</strong>
                    {
                        tags.map((tag, index) => <span key={index} className='text-[#23BE0A] me-3 p-2 bg-green-100 rounded-lg'>#{tag}</span>)
                    }
                    <CiLocationOn className='text-2xl me-2' /> Year of Publishing : {yearOfPublishing}
                </div>

                <div className='flex py-3 border-b-2'>
                    <HiOutlineUsers className='text-2xl me-2' />Publisher : {publisher}
                    <BsFileEarmarkPdf className='text-2xl mx-2' />Page : {totalPages}
                </div>

                <div className='flex items-center mt-3'>
                    <p className="text-sm text-gray-600 bg-blue-100 text-blue-500 p-2 px-4 rounded-full me-3">Category :{category}</p>
                    <p className="text-sm bg-orange-100 text-orange-500 p-2 px-4 rounded-full me-3">Rating : {rating}</p>
                    <NavLink to={`/book-details/${bookId}`}><p className="p-2 bg-[#23BE0A] text-white border-none text-sm px-8 rounded-full"> View The List</p></NavLink>
                </div>


            </div>
        </div>
    );
};

export default BookCard;