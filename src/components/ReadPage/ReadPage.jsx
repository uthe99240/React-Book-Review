import React, { useEffect, useState } from 'react';
import BarChart from '../Chart/BarChart';
import { getReadBookApplication } from '../../../utility/localstorage';

const ReadPage = () => {

    const [Books, setBooks] = useState([]);
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const readBookIds = getReadBookApplication();
        
        if (Books.length > 0) {
            const filteredReadBooks = Books.filter((book) => readBookIds.includes(book.bookId));
            setReadBooks(filteredReadBooks);
        }
    }, [Books]);

    useEffect(() => {
        fetch('/books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    return (
        <div style={{ width: '70%', margin: 'auto', padding: '50px' }}>
            <BarChart readBooks={readBooks} />
        </div>
    );
};

export default ReadPage;