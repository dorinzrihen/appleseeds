const book = {
    name: "harry potter",
    year: 1997,
    author: "J. K. Rowling",
    country: "United Kingdom",
    hero: "harry",
};

const bookInfo = `The book ${book.name} was written by ${book.author} in the year ${book.year} in ${book.country}.
the main character is ${book.hero}`;

console.log(bookInfo);