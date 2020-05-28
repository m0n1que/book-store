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

const bookStaticList = [
    {
        "Author": {
            "fName": "Steve", 
            "lName": "Berry"
        },
        "title": "The Alexandria Link",
        "publishedDate": "2007", 
        "picture": "images/books/alexandria_link.jpg",
        "totalPages": 462,
        "publisher": "Ballantine Books",
        "language":"English",
        "category": "Mistery",
        "price": "$10", 
        "type": "best-selling"
    },
    {
        "Author": {
            "fName": "Steve", 
            "lName": "Berry"
        },
        "title": "The Venetian Betrayal",
        "publishedDate": "2008", 
        "picture": "images/books/venetian_betrayal.jpg",
        "totalPages": 462,
        "publisher": "Ballantine Books",
        "language":"English",
        "category": "Mistery",
        "price": "$10",
        "type": "best-selling"
    },
    {
        "Author": {
            "fName": "Jordan", 
            "lName": "Peterson"
        },
        "title": "12 Rules for Life",
        "publishedDate": "2018", 
        "picture": "images/books/12_rules_of_life.jpg",
        "totalPages": 448,
        "publisher": "Random House Canada",
        "language":"English",
        "category": "Self-help book",
        "price": "$15",
        "type": "latest-books"
    }
];

class BookList {
    books = [];

    constructor(type) {
        this.type = type;
        const books = bookStaticList.filter(book => book.type == type);
        this.createBookItem(books, type);
    }

    createBookItem(books, type) {
        const bookTypes = document.querySelector(`#main section .row .${type}`);
        const cloned = bookTypes.cloneNode(true);
        const div_book_to_add = bookTypes.parentNode;
        for (const item of books) {
            cloned.childNodes[1].childNodes[1].src = item.picture;
            cloned.childNodes[1].childNodes[1].alt = item.title;
        }
        bookTypes.parentNode.append(cloned);
    }
}

class App {
    static init() {
        const bestSellerBooks = new BookList('best-selling');
        const lastestBooks = new BookList('latest-books');
    }
}

App.init();