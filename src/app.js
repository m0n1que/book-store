// class Author {
//     constructor(fName, lName) {
//         this.fName = fName;
//         this.lName = lName;
//     }
// }

// class Book extends Author{
//     title = '';
//     publishedDate = new Date(); 
//     picture = '';
//     totalPages; 
//     publisher; 
//     language; 
//     category;
//     price = 0;

//     constructor(fName, lName, title, publishedDate, picture, totalPages, publisher, language, category, price) {
//         super(fName, lName);
//         this.title = title;
//         this.publishedDate = new Date(); 
//         this.picture = picture;
//         this.totalPages = totalPages; 
//         this.publisher = publisher; 
//         this.language = language;
//         this.category = category;
//         this.price = price;
//     }
// } 

class BookList {
    //books = [];

    constructor(type) {
        this.type = type;
        this.books = [];
        if (this.type != 'already-selling'){
            this.loadBooks(type);
        }
    }

    loadBooks(type) {
        fetch('https://localhost:8080/seed_data/data.json')
            .then(response => response.json())
            .then(data => {
                this.books = data.filter(book => book.type == type);
                this.createBookItem(this.books, type);
            });

    }

    createBookItem(books, type) {
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
        console.log(lastestBooks);
        console.log(bestSellerBooks);
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
            }).then(response => response.json())
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