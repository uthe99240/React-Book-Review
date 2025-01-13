import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { getReadBookApplication, saveReadBookApplication, saveWishlistBookApplication } from '../../../utility/localstorage';

const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const idInt = parseInt(bookId);
    const book = books.find(book => book.bookId == idInt);

    const handleReadBook = () => {
        const exists = saveReadBookApplication(idInt);
        console.log(exists);

        if (!exists) {
            toast('You added in Booklist successfully.');
        } else {
            toast('Sorry! Book already added in Booklist.');
        }

    }

    const handleWishlistBook = () => {

        const storedReadBookApplications = getReadBookApplication();
        let exists = storedReadBookApplications.find(bookId => bookId === idInt);

        if (exists) {
            toast('Sorry! Book already added in BookList.');
        } else {
            exists = saveWishlistBookApplication(idInt);
            if (!exists) {
                toast('You added in Wishlist successfully.');
            } else {
                toast('Sorry! Book already added in Wishlist.');
            }
        }

    }

    return (
        <div>
            <div className="grid grid-cols-2 gap-4 m-5">
                <div className='bg-gray-200 py-12 rounded'>
                    <img src={book.image} alt="" srcset="" />
                </div>
                <div className='px-4'>
                    <h2 className='text-4xl font-semibold'>{book.bookName}</h2>
                    <p className='py-2'>By : {book.author}</p>
                    <hr />
                    <p className='py-2'>{book.category}</p>
                    <hr />
                    <p className='py-3'><strong>Review : </strong> {book.review}</p>
                    <p className='py-5'><strong>Tag  </strong>
                        {
                            book.tags.map((tag, index) => <span key={index} className='text-[#23BE0A] ms-3 p-2 bg-green-100 rounded-lg'>#{tag}</span>)
                        }
                    </p>
                    <hr />

                    <div className="grid grid-cols-2 gap-4 mt-5">
                        <div>Number of Pages : </div>
                        <strong>{book.totalPages}</strong>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-3">
                        <div>Publisher : </div>
                        <strong>{book.publisher}</strong>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-3">
                        <div>Year of Publishing : </div>
                        <strong>{book.yearOfPublishing}</strong>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-3">
                        <div>Rating : </div>
                        <strong>{book.rating}</strong>
                    </div>

                    <div className="my-8">
                        <a className="btn me-2 text-black px-8 border-gray-500" onClick={handleReadBook}>Read</a>
                        <a className="btn bg-[#50B1C9] text-white px-8" onClick={handleWishlistBook}>Wishlist</a>
                        <ToastContainer />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookDetails;