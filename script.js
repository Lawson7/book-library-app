let myLibrary = [];

function Book(title, author, genre, read) {
    this.title = title;
    this.author = author;
    this.genre = genre;
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

const theHobbit = new Book('The Hobbit', 'That G', 'Fiction', 'Not Read');
const theAlchemist = new Book('The Alchemist', 'Paul C', 'Fiction', 'Read');

addBookToLibrary(theAlchemist);
addBookToLibrary(theHobbit);

//test books


function render(books) {

    clearDisplay()

    books.forEach(book => {

        const bookCard = document.createElement('div')
        const bookBox = document.createElement('div');
        const delButton = document.createElement('span');

        bookCard.className = 'bookCard';
        bookDisplay.appendChild(bookCard);

        bookBox.className = 'bookBox'
        bookBox.textContent = '';
        bookCard.appendChild(bookBox);

        delButton.className = 'delBook'
        delButton.textContent = '🗑'
        bookCard.appendChild(delButton);

        bookBox.setAttribute("order", books.indexOf(book));

        delButton.setAttribute("order", books.indexOf(book));
    
        delButton.addEventListener('click', function(e){

            let order = e.target.order;

            for (let i = 0; i < myLibrary.length; i++) {
                if (myLibrary[i].order == order) {
                    bookCard.remove();
                    console.log(myLibrary);
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

    const newBook = new Book(
        addForm.name.value,
        addForm.author.value,
        addForm.genre.value,
        addForm.read.value);

    addBookToLibrary(newBook);
    render(myLibrary);

};