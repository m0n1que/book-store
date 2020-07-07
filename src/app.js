class Book{
    constructor(id, title, publishDate, picture, totlaPages, publisher, language, category, price, type) {
        this.id = id; 
        this.title = title; 
        this.publishedDate = publishDate; 
        this.picture = picture;
        this.totalPages = totlaPages;
        this.publisher = publisher;
        this.language = language; 
        this.category = category; 
        this.price = price; 
        this.type = type; 
    }
}

class BookList{
    constructor(type) {
        this.books = [];
        this.type = type;
        this.loadBooks(type);
    }

    loadBooks(type){
        fetch('https://localhost:8080/seed_data/data.json')
            .then(response => response.json())
            .then(data => {
                let filterBooks = data.filter(book => book.type == type);
                for(let i of filterBooks){
                    let filteredBook = new Book(i.id, i.title, i.publishedDate, i.picture, i.totlaPages, i.publisher, i.language, i.category, i.price, i.type);
                    this.books.push(filteredBook)
                }
                this.render(type);
            });
    }

    render(type) {
        const bookList = document.getElementById(type);        
        for (const bks of this.books){
            const bookItem = new BookItem(bks);
            const bkEl = bookItem.renderBookItem();
            bookList.append(bkEl);
        }
        return bookList;
    }   
}

class BookItem {
    constructor(book){
        this.book = book;
    }

    viewBookDetails(){
        console.log(this.book);
        console.log('viewing the book details');
    }

    renderBookItem(){
        const bkEl = document.createElement('div');
        bkEl.classList.add('col-md-3', 'col-sm-6', 'best-selling');
        bkEl.innerHTML = `
            <div class="card-body">
                <img src="${this.book.picture}" alt="${this.book.title}">
            </div>
            <div class="d-flex justify-content-center align-items-center">
                <div class="btn-group">
                    <buttton id="btn_view" class="btn btn-lg btn-outline-secondary btn-best-sell">View</button>
                </div>
            </div>
        `;
        const addViewButton = bkEl.querySelector('#btn_view');
        addViewButton.addEventListener('click', this.viewBookDetails.bind(this));
        return bkEl;
    }
}


class App {
    static init() {

        const renderHook = document.getElementById('main');
        const latestBooks = new BookList('latest-books');
        const bestSelling = new BookList('best-selling');

        this.getCurrentUser();
    }    

    static getCurrentUser(){
        const bks_token_ex = localStorage.getItem('bks_token');
        if(bks_token_ex){
            fetch('https://localhost:5001/api/Account/userdetails', {
                method: 'get', 
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${bks_token_ex}`
                }
            })
            .then(response => response.json())
            .then(data => {
                const userLbl = document.getElementById('user_in');
                userLbl.textContent = data.displayName;
                document.getElementById('login_link').style.display = 'none';
                document.getElementById('register_link').style.display = 'none';
                document.getElementById('profile').style.display = 'block';
            });
        }
    }
}
App.init();

const logout = document.getElementById('logout_link');
logout.addEventListener('click', (e)=>{
    e.preventDefault();
    localStorage.removeItem('bks_token');
    window.location.reload();
})