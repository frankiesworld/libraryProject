const myLibrary = [];



function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
    };
    this.toggleRead = function() {
        this.read = !this.read;
    };
    this.id = crypto.randomUUID();
}

                    

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);

book1.info();
book1.toggleRead();


function addBookToLibrary(book) {
    myLibrary.push(book);
    render();
}


const info = document.getElementById("bookList");
const form = document.getElementById("bookForm");
