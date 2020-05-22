class Author {
    constructor(fName, lName) {
        this.fName = fName;
        this.lName = lName;
    }
}

class Book extends Author{
    title = '';
    publishedDate = new Date(); 
    picture = '';
    totalPages; 
    publisher; 
    language; 
    category;
    price = 0;

    constructor(fName, lName, title, publishedDate, picture, totalPages, publisher, language, category, price) {
        super(fName, lName);
        this.title = title;
        this.publishedDate = new Date(); 
        this.picture = picture;
        this.totalPages = totalPages; 
        this.publisher = publisher; 
        this.language = language;
        this.category = category;
        this.price = price;
    }
}

const chargin = new Book(
    'Honore',
    'de Balzac',
    'La paeu de chargin', 
    new Date(),
    '/images/books/la_paeu_de_chagrin.jpg',
    314, 
    'Prosvetno delo',
    'MKD', 
    'drama', 
    '$10'
);
