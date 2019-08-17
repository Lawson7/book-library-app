let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};


function addBookToLibrary (Book){
    myLibrary.push(Book);
};



const theHobbit = new Book('The Hobbit', 'That G', '301 pages', 'Not Read');
const theAlchemist = new Book('The Alchemist', 'Paul C', '212 pages', 'Read');

addBookToLibrary(theAlchemist);
addBookToLibrary(theHobbit);


const bookDisplay = document.getElementById('bookDisplay');

function clearDisplay(){
    myLibrary = [];
}

function render(books) {
    clearDisplay()
    books.forEach(book => {
        const bookBox = document.createElement('div');
        const delButton = document.createElement('button');
        bookBox.className = 'bookBox'
        bookBox.textContent = '';
        bookDisplay.appendChild(bookBox);
        delButton.className = 'delBook'
        delButton.textContent = 'Delete'
        bookDisplay.appendChild(delButton);

        for (let prop in book){
            bookBox.textContent = bookBox.textContent + (book[prop]) + '. ';
        }
    });
};

render(myLibrary);

function AddBookButton() {
    let title = prompt('Book Title?');
    let author = prompt('Book Author?');
    let pages = prompt('Number of Pages?');
    let read = prompt('Read or Not Read?')
    const newBook = new Book(title, author, pages + ' pages', read);
    addBookToLibrary(newBook);
    render(myLibrary);
};