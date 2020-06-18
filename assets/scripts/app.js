/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// class Author {\r\n//     constructor(fName, lName) {\r\n//         this.fName = fName;\r\n//         this.lName = lName;\r\n//     }\r\n// }\r\n\r\n// class Book extends Author{\r\n//     title = '';\r\n//     publishedDate = new Date(); \r\n//     picture = '';\r\n//     totalPages; \r\n//     publisher; \r\n//     language; \r\n//     category;\r\n//     price = 0;\r\n\r\n//     constructor(fName, lName, title, publishedDate, picture, totalPages, publisher, language, category, price) {\r\n//         super(fName, lName);\r\n//         this.title = title;\r\n//         this.publishedDate = new Date(); \r\n//         this.picture = picture;\r\n//         this.totalPages = totalPages; \r\n//         this.publisher = publisher; \r\n//         this.language = language;\r\n//         this.category = category;\r\n//         this.price = price;\r\n//     }\r\n// } \r\n\r\nclass BookList {\r\n    //books = [];\r\n\r\n    constructor(type) {\r\n        this.type = type;\r\n        this.books = [];\r\n        if (this.type != 'already-selling'){\r\n            this.loadBooks(type);\r\n        }\r\n    }\r\n\r\n    loadBooks(type) {\r\n        fetch('http://localhost:5000/seed_data/data.json')\r\n            .then(response => response.json())\r\n            .then(data => {\r\n                this.books = data.filter(book => book.type == type);\r\n                this.createBookItem(this.books, type);\r\n            });\r\n\r\n    }\r\n\r\n    createBookItem(books, type) {\r\n        // const bookTypes = document.querySelector(`#main section .row .${type}`);\r\n        // const cloned = bookTypes.cloneNode(true);\r\n        // const div_book_to_add = bookTypes.parentNode;\r\n        // for (const item of books) {\r\n        //     cloned.childNodes[1].childNodes[1].src = item.picture;\r\n        //     cloned.childNodes[1].childNodes[1].alt = item.title;\r\n        //     div_book_to_add.append(cloned);\r\n        // }\r\n        const typeDiv = document.querySelector(`#${type}`);\r\n        for(const item of books) {\r\n            const wrapDiv = document.createElement('DIV');\r\n            wrapDiv.classList.add('col-md-3', 'col-sm-6', 'best-selling');\r\n            const cardBook = document.createElement('DIV');\r\n            cardBook.classList.add('card-body');\r\n            wrapDiv.append(cardBook);\r\n    \r\n            const imgBook = document.createElement('IMG');\r\n            imgBook.src = item.picture;\r\n            imgBook.alt = item.title;\r\n            cardBook.append(imgBook);\r\n\r\n            const footerBook = document.createElement('DIV');\r\n            footerBook.classList.add('d-flex', 'justify-content-center', 'align-items-center');\r\n            cardBook.append(footerBook);\r\n\r\n            const btnHolder = document.createElement('DIV');\r\n            btnHolder.classList.add('btn-group');\r\n            const viewBtn = document.createElement('BUTTON');\r\n            viewBtn.classList.add('btn', 'btn-lg', 'btn-outline-secondary', 'btn-best-sell');\r\n            const btnText = document.createTextNode(\"View\");\r\n            viewBtn.append(btnText);\r\n            btnHolder.append(viewBtn);\r\n            footerBook.append(btnHolder);\r\n            typeDiv.append(wrapDiv);\r\n        }\r\n\r\n    }\r\n}\r\n\r\nclass App {\r\n    static init() {\r\n        const bestSellerBooks = new BookList('best-selling');\r\n        const lastestBooks = new BookList('latest-books');\r\n        console.log(lastestBooks);\r\n        console.log(bestSellerBooks);\r\n    }    \r\n}\r\n\r\nApp.init();\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });