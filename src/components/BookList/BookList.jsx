import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const BookList = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    return (
        <div className='my-12'>
            <h2 className='text-4xl font-semibold text-center pb-8'>Books</h2>
            <div className='grid grid-cols-3 gap-6'>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>

        </div>
    );
};

export default BookList;