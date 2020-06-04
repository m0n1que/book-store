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

class BookList {
    books = [];

    constructor(type) {
        this.type = type;
        if (this.type != 'already-selling'){
            this.loadBooks(type);
        }
    }

    loadBooks(type) {
        fetch('http://localhost:5000/seed_data/data.json')
            .then(response => response.json())
            .then(data => {
                this.books = data.filter(book => book.type == type);
                this.createBookItem(this.books, type);
            });

    }

    createBookItem(books, type) {
        // const bookTypes = document.querySelector(`#main section .row .${type}`);
        // const cloned = bookTypes.cloneNode(true);
        // const div_book_to_add = bookTypes.parentNode;
        // for (const item of books) {
        //     cloned.childNodes[1].childNodes[1].src = item.picture;
        //     cloned.childNodes[1].childNodes[1].alt = item.title;
        //     div_book_to_add.append(cloned);
        // }
        const typeDiv = document.querySelector(`#${type}`);
        for(const item of books) {
            const wrapDiv = document.createElement('DIV');
            wrapDiv.classList.add('col-md-3', 'col-sm-6', 'best-selling');
            const cardBook = document.createElement('DIV');
            cardBook.classList.add('card-body');
            wrapDiv.append(cardBook);
    
            const imgBook = document.createElement('IMG');
            imgBook.src = item.picture;
            imgBook.alt = item.title;
            cardBook.append(imgBook);

            const footerBook = document.createElement('DIV');
            footerBook.classList.add('d-flex', 'justify-content-center', 'align-items-center');
            cardBook.append(footerBook);

            const btnHolder = document.createElement('DIV');
            btnHolder.classList.add('btn-group');
            const viewBtn = document.createElement('BUTTON');
            viewBtn.classList.add('btn', 'btn-lg', 'btn-outline-secondary', 'btn-best-sell');
            const btnText = document.createTextNode("View");
            viewBtn.append(btnText);
            btnHolder.append(viewBtn);
            footerBook.append(btnHolder);
            typeDiv.append(wrapDiv);
        }

    }
}

class App {
    static init() {
        const bestSellerBooks = new BookList('best-selling');
        const lastestBooks = new BookList('latest-books');
    }    
}

App.init();