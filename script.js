let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

const addBookForm = document.getElementById("addBookForm");
const newBookBtn = document.querySelector(".newBook-btn");
const cancelBtn = document.getElementById("cancelBtn")

newBookBtn.addEventListener("click", () => {
    addBookForm.classList.remove("hidden");
});

cancelBtn.addEventListener("click", () => {
    bookForm.reset();
    addBookForm.classList.add("hidden");
});

const bookForm = document.getElementById("bookForm");
bookForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = parseInt(document.getElementById("pages").value);

    if (title.trim() === "" || author.trim() === "" || isNaN(pages)) {
        alert("Error: Please fill in all the fields correctly.");
        return;
    }

    const newBook = new Book(title, author, pages);
    myLibrary.push(newBook);

    bookForm.reset();
    addBookForm.classList.add("hidden");

    displayBooks();
});

function displayBooks() {
    const booksContainer = document.getElementById("books-container");
    booksContainer.innerHTML = "";
    myLibrary.forEach((book, index) => {
        const bookElement = document.createElement("div");
        bookElement.classList.add("list-books");

        const titleElement = document.createElement("div");
        titleElement.classList.add("title");
        const titleParagraph = document.createElement("p");
        titleParagraph.classList.add("p-title");
        titleParagraph.textContent = book.title;
        titleElement.appendChild(titleParagraph);
        bookElement.appendChild(titleElement);

        const authorElement = document.createElement("div");
        authorElement.classList.add("author");
        const authorParagraph = document.createElement("p");
        authorParagraph.classList.add("p-author");
        authorParagraph.textContent = book.author;
        authorElement.appendChild(authorParagraph);
        bookElement.appendChild(authorElement);

        const pagesElement = document.createElement("div");
        pagesElement.classList.add("pages");
        const pagesParagraph = document.createElement("p");
        pagesParagraph.classList.add("p-pages");
        pagesParagraph.textContent = book.pages;
        pagesElement.appendChild(pagesParagraph);
        bookElement.appendChild(pagesElement);

        const buttonElement = document.createElement("div");
        buttonElement.classList.add("btn-read");
        const button = document.createElement("button");
        button.classList.add("button-read")
        const shadowSpan = document.createElement("span");
        shadowSpan.classList.add("new-shadow");
        const readSpan = document.createElement("span");
        readSpan.classList.add("new-read");
        const frontSpan = document.createElement("span");
        frontSpan.classList.add("new-front", "new-text");
        button.appendChild(shadowSpan);
        button.appendChild(readSpan);
        button.appendChild(frontSpan);
        buttonElement.appendChild(button);
        bookElement.appendChild(buttonElement);

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-button");
        deleteBtn.innerHTML = `<svg width="50" height="25" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><path d="M10 11v6"></path><path d="M14 11v6"></path></svg>`;
        deleteBtn.addEventListener("click", () => {
            removeBook(index);
            displayBooks();
        });
        bookElement.appendChild(deleteBtn);

        booksContainer.appendChild(bookElement);
    });

    const buttons = document.querySelectorAll(".button-read");
    buttons.forEach(button => {
        const readSpan = button.querySelector(".new-read");
        const frontSpan = button.querySelector(".new-front");

        button.addEventListener("click", (event) => {
            if (readSpan.classList.contains("new-read")) {
                readSpan.classList.remove("new-read");
                readSpan.classList.add("new-not-read");
            } else {
                readSpan.classList.remove("new-not-read");
                readSpan.classList.add("new-read");
            }

            if (frontSpan.classList.contains("new-front")) {
                frontSpan.classList.remove("new-front");
                frontSpan.classList.add("new-notRead-front");
            } else {
                frontSpan.classList.remove("new-notRead-front");
                frontSpan.classList.add("new-front");
            }

            event.stopPropagation();
        })
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
}

// Llamamos a displayBooks() por primera vez para mostrar los libros iniciales (si los hay)
displayBooks();
