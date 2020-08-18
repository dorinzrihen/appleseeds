const book1 = {
    name: "Harry Potter and the Philosopher's Stone",
    year: 1997,
    author: "J. K. Rowling",
};

const book2 = {
    name: "Harry Potter and the Chamber of Secrets",
    year: 1998,
    author: "J. K. Rowling",
};

const bookUtils = {
    getFirstPublished(book1,book2){
        return book1.year < book2.year ? book1 
        : book1.year > book2.year ? book2 : "Published in the same time";
    },

    setNewEdition(newEditionYear,book){
        return book.year = newEditionYear;
    },

    setLanguage(book,language){
        return book.language = language;
    },

    setTranslation(book,translator,language){
        return book.language = {translator,language,}
    },

    setPublisher(book,publisherName,location){
        return book.publisherName = {publisherName,location,}
    },

    isSamePublisher(book1,book2){
        if(book1.publisherName && book2.publisherName){
            if((book1.publisherName.publisherName === book2.publisherName.publisherName) && (book1.publisherName.location === book2.publisherName.location)){
            return true;
            }
        }
    return false
    },
}


// console.log(bookUtils.getFirstPublished(book1,book2));
// console.log(bookUtils.setNewEdition(book1,2005));
// console.log(book1)
// console.log(bookUtils.setLanguage(book2,"english"));
// console.log(book2)

// console.log(bookUtils.setTranslation(book2,"bob","english"));
// console.log(book2)

// console.log(bookUtils.setPublisher(book2,"bob","us"));
// console.log(book2)

// console.log(bookUtils.setPublisher(book1,"bob","fdg"));
// console.log(book1)

// console.log(bookUtils.isSamePublisher(book1,book2));