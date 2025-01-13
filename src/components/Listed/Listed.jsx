import React, { useEffect, useState } from 'react';
import { getReadBookApplication, getWishlistBookApplication } from '../../../utility/localstorage';
import BookCard from '../BookCard/BookCard';
import { IoIosArrowDown } from "react-icons/io";

const Listed = () => {

    const [Books, setBooks] = useState([]);
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);
    const [activeTab, setActiveTab] = useState('read');

    useEffect(() => {
        const readBookIds = getReadBookApplication();
        const wishlistBookIds = getWishlistBookApplication();
        if (Books.length > 0) {
            const filteredReadBooks = Books.filter((book) => readBookIds.includes(book.bookId));
            setReadBooks(filteredReadBooks);
            const filteredWishlistBooks = Books.filter((book) => wishlistBookIds.includes(book.bookId));
            setWishlistBooks(filteredWishlistBooks);
        }
    }, [Books]);

    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    const handleSort = (criteria, order = 'desc') => {
        let sortedBooks = [...Books];
        if (criteria === 'rating') {
            sortedBooks.sort((a, b) => {
                return order === 'desc' ?  b.rating - a.rating : a.rating - b.rating ;
            });
        } else if (criteria === 'pages') {
            sortedBooks.sort((a, b) => {
                return order === 'desc' ?  b.totalPages - a.totalPages : a.totalPages - b.totalPages ;
            });
        } else if (criteria === 'year') {
            sortedBooks.sort((a, b) => {
                return order === 'desc' ?  b.yearOfPublishing - a.yearOfPublishing : a.yearOfPublishing - b.yearOfPublishing;
            });
        }
        setBooks(sortedBooks);
    };

    return (
        <div>
            <h2 className='bg-gray-200 p-5 text-center font-bold text-2xl rounded'>Books</h2>

            <div className='flex justify-center mt-3'>
                <details className="dropdown">
                    <summary className="btn m-1 bg-[#23BE0A] text-white px-6">Sort By <IoIosArrowDown /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a onClick={() => handleSort('rating', 'desc')}>Rating</a></li>
                        <li><a onClick={() => handleSort('pages', 'desc')}>Number of pages</a></li>
                        <li><a onClick={() => handleSort('year')}>Publisher year</a></li>
                    </ul>
                </details>
            </div>


            <div role="tablist" className="tabs tabs-lifted py-3">
                {activeTab === 'read' ? (
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked="checked" onChange={() => setActiveTab('read')} />
                ) : (
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" onChange={() => setActiveTab('read')} />
                )}

                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {readBooks.length > 0 ? (
                        <div>
                            {readBooks.map((readbook) => <BookCard key={readbook.bookId} book={readbook}></BookCard>)}
                        </div>
                    ) : (
                        <p>No books found in your read list.</p>
                    )}
                </div>
                {activeTab === 'wishlist' ? (
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="WishList Books" checked="checked" onChange={() => setActiveTab('wishlist')} />
                ) : (
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="WishList Books" onChange={() => setActiveTab('wishlist')} />
                )}

                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {wishlistBooks.length > 0 ? (
                        <div>
                            {wishlistBooks.map((wishlistbook) => <BookCard key={wishlistbook.bookId} book={wishlistbook}></BookCard>)}
                        </div>
                    ) : (
                        <p>No books found in your read list.</p>
                    )}
                </div>

            </div>

        </div>
    );
};

export default Listed;