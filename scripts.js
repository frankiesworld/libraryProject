
const bookList = document.getElementById("bookList");
const form = document.getElementById("bookForm");




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

    displayBooks();

}
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("Dune", "Frank Herbert", 412, false);


function deleteBook(id) {
    const index = myLibrary.findIndex(book => book.id === id);
    if (index !== -1) {
        myLibrary.splice(index, 1);
    }
    
    displayBooks();
}



function displayBooks() {
    bookList.innerHTML = "";
    myLibrary.forEach(book => {
        const card = document.createElement("div");
        const btn = document.createElement("button");
        const readBtn = document.createElement("button");

        card.className = "book-card";
        card.innerHTML = `
            <h2>${book.title}</h2>
            <p>by ${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.read ? "Read" : "Not Read Yet"}</p>`;

        readBtn.className = "read-btn";
        readBtn.textContent = "Read";
        readBtn.addEventListener("click", () => {
            book.read = !book.read;
            displayBooks();
            });


        btn.className = "delete-btn";
        btn.textContent = "Delete";
        btn.addEventListener("click", () => {
            deleteBook(book.id);
        });


        card.appendChild(btn);
        card.appendChild(readBtn);

        bookList.appendChild(card);
    });  
}

