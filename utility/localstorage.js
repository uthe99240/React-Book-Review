const getReadBookApplication = () =>{
    const ReadBookApplication = localStorage.getItem('read');
    if(ReadBookApplication){
        return JSON.parse(ReadBookApplication);
    }
    return [];
}


const saveReadBookApplication = id =>{
    const storedReadBookApplications = getReadBookApplication();
    const exists = storedReadBookApplications.find(bookId => bookId === id);
    if(!exists){
        storedReadBookApplications.push(id);
        localStorage.setItem('read', JSON.stringify(storedReadBookApplications))
    }
    return exists;
}

const getWishlistBookApplication = () =>{
    const ReadWishlistApplication = localStorage.getItem('wishlist');
    if(ReadWishlistApplication){
        return JSON.parse(ReadWishlistApplication);
    }
    return [];
}


const saveWishlistBookApplication = id =>{
    const storedWishlistBookApplications = getWishlistBookApplication();
    const exists = storedWishlistBookApplications.find(bookId => bookId === id);
    if(!exists){
        storedWishlistBookApplications.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlistBookApplications))
    }
    return exists;
}

export { getReadBookApplication, saveReadBookApplication, getWishlistBookApplication ,saveWishlistBookApplication }