
const bookList = document.getElementById("bookList");
const form = document.getElementById("bookForm");
const newBookBtn = document.getElementById("newBook");
const dialog = document.getElementById("dialog");
const cancelDialogBtn = document.getElementById("cancelDialog");




newBookBtn.addEventListener("click", () => {
    dialog.showModal();
});

cancelDialogBtn.addEventListener("click", () => {
    dialog.close();
});

form.addEventListener("submit", (e) => {

    e.preventDefault();
    const title = form.elements.title.value;
    const author = form.author.value;
    const pages = Number(form.pages.value);
    const read = form.read.checked;

    addBookToLibrary(title, author, pages, read);

    dialog.close();
    form.reset();
});






const myLibrary = [];

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

Book.prototype.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}`;
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
        
        const title = document.createElement("h2");
        title.textContent = book.title;

        const author = document.createElement("p");
        author.textContent = `by ${book.author}`;

        const pages = document.createElement("p");
        pages.textContent = `${book.pages} pages`;

        const status = document.createElement("p");
        status.textContent = book.read ? "Read" : "Not Read Yet";

        card.append(title, author, pages, status);

        readBtn.className = "read-btn";
        readBtn.textContent = "Read";
        readBtn.addEventListener("click", () => {
            book.toggleRead();

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

