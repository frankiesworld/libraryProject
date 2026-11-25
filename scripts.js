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

                    




function addBookToLibrary(title, author, pages, read) {
    
    const addedBook = new Book(title, author, pages, read);
    myLibrary.push(addedBook);

}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);


const bookList = document.getElementById("bookList");
const form = document.getElementById("bookForm");
