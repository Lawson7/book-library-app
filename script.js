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

const bookDisplay = document.getElementById('bookDisplay');


function clearDisplay(){
    bookDisplay.innerHTML = '';
};

//test books

const theHobbit = new Book('The Hobbit', 'That G', '301 pages', 'Not Read');
const theAlchemist = new Book('The Alchemist', 'Paul C', '212 pages', 'Read');

addBookToLibrary(theAlchemist);
addBookToLibrary(theHobbit);

//test books


function render(books) {

    clearDisplay()

    books.forEach(book => {

        const bookBox = document.createElement('div');
        const delButton = document.createElement('span');


        bookBox.className = 'bookBox'
        bookBox.textContent = '';
        bookDisplay.appendChild(bookBox);

        delButton.className = 'delBook'
        delButton.textContent = '×'
        bookDisplay.appendChild(delButton);

        bookBox.setAttribute("order", books.indexOf(book));
        console.log(bookBox.attributes.order)

        delButton.setAttribute("order", books.indexOf(book));
        console.log(delButton.attributes.order)
    
        delButton.addEventListener('click', function(e){

            let order = e.target.order;

            for (let i = 0; i < myLibrary.length; i++) {
                if (myLibrary[i].order == order) {
                    bookBox.remove();
                    delButton.remove();
                    console.log(myLibrary)
                    myLibrary.splice(i, 1);
                    break;
                }
            }
        });

            for (let prop in book){
                bookBox.textContent = bookBox.textContent + (book[prop]) + '. ';
            }
    });
}


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
