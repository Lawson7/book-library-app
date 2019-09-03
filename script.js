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

//EXAMPLE BOOKS

const theHobbit = new Book('The Hobbit', 'That G', 'Fiction', 'Not Read');
const theAlchemist = new Book('The Alchemist', 'Paul C', 'Fiction', 'Read');

addBookToLibrary(theAlchemist);
addBookToLibrary(theHobbit);

//EXAMPLE BOOKS

function render(books) {

    //clears display
    bookDisplay.innerHTML = '';

    books.forEach(book => {

        const bookCard = document.createElement('div')
        const delButton = document.createElement('span');
        const bookBox = document.createElement('p');
        const readIcon = document.createElement('span')

        bookCard.className = 'bookCard';
        bookDisplay.appendChild(bookCard);

        delButton.className = 'delBook'
        delButton.textContent = '✘'
        bookCard.appendChild(delButton);

        bookBox.className = 'bookBox'
        bookBox.textContent = book.title + ', ' + book.author + ', ' + book.genre + '.';
        bookCard.appendChild(bookBox);

        readIcon.textContent = book.read
        bookCard.appendChild(readIcon);

        if (book.read == 'Read'){
            readIcon.className = 'readIconYes';
        } else {
            readIcon.className = 'readIconNo';
        }

        bookBox.setAttribute("id", books.indexOf(book));
        delButton.setAttribute("id", books.indexOf(book));
        readIcon.setAttribute("id", books.indexOf(book));
    
        delButton.addEventListener('click', deleteBook)
        readIcon.addEventListener('click', readChange);
    });
};

function deleteBook(e){
    const index = e.target.id;
    myLibrary.splice(index,1);
    render(myLibrary);
};

function readChange (e){

    const index = e.target.id;
    const readStatus = e.target.textContent;

    if (readStatus == 'Read'){
        myLibrary[index].read = 'Not Read';
        e.target.textContent = 'Not Read';
        e.target.className = 'readIconNo';

    } else {
        myLibrary[index].read = 'Read'
        e.target.textContent = 'Read';
        e.target.className = 'readIconYes';
    }
    render(myLibrary);
}

//Initial render
render(myLibrary);

function openForm() {
    document.getElementById("formDisplay").style.display = "inline-block";
    document.getElementById("addBookButton").style.display = "none";
    document.getElementById("closeButton").style.display = "inline-block";
  }

function closeForm() {
    document.getElementById("formDisplay").style.display = "none";
    document.getElementById("addBookButton").style.display = "inline-block";
    document.getElementById("closeButton").style.display = "none";
  }

function AddBookButton() {

    if (addForm.title.value == '' || addForm.author.value == '' || addForm.genre.value == ''){
        alert('Please enter correctly')
    } else {
    const newBook = new Book(
        addForm.title.value,
        addForm.author.value,
        addForm.genre.value,
        addForm.read.value);

    addBookToLibrary(newBook);
    render(myLibrary);
    addForm.reset();
    }
};