let myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary() {
    const title = prompt("Enter the name of the book");
    if (title === null) {
        return;
    }
    const author = prompt("Enter the name of the author");
    
    if (author === null) {
        return;
    }
    
    let pages;
    
    while (true) {
      const input = prompt("Enter the number of pages");
      pages = parseInt(input);

      if (input === null) {
        return; 
      }

      pages = parseInt(input);
      
      if (!isNaN(pages)) {
        break;
      }
      
      alert("Error: Please enter a valid number of pages");
    }


    const newBook =  new Book(title, author, pages)
    myLibrary.push(newBook);

    displayBooks();
}

const newBookBtn = document.querySelector(".newBook-btn");
newBookBtn.addEventListener("click", addBookToLibrary);

function displayBooks() {
    const booksContainer = document.getElementById("books-container");
    booksContainer.innerHTML = "";
    myLibrary.forEach(book => {
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
        })


}

const buttons = document.querySelectorAll(".button-read");
buttons.forEach(button => {
    const readSpan = button.querySelector(".read");
    const frontSpan = button.querySelector(".front");

    button.addEventListener("click", (event) => {
        if (readSpan.classList.contains("read")) {
          readSpan.classList.remove("read");
          readSpan.classList.add("not-read");
        } else {
          readSpan.classList.remove("not-read");
          readSpan.classList.add("read");
        }

        if (frontSpan.classList.contains("front")) {
            frontSpan.classList.remove("front");
            frontSpan.classList.add("front-not-read");
          } else {
            frontSpan.classList.remove("front-not-read");
            frontSpan.classList.add("front");
          }
      
          event.stopPropagation();
        })
    })