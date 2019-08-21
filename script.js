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



//TEST BOOKS

const theHobbit = new Book('The Hobbit', 'That G', 'Fiction', 'Not Read');
const theAlchemist = new Book('The Alchemist', 'Paul C', 'Fiction', 'Read');

addBookToLibrary(theAlchemist);
addBookToLibrary(theHobbit);

//TEST BOOKS



function render(books) {

    clearDisplay()

    books.forEach(book => {

        const bookCard = document.createElement('div')
        const bookBox = document.createElement('p');
        const readIcon = document.createElement('span')
        const delButton = document.createElement('span');

        bookCard.className = 'bookCard';
        bookDisplay.appendChild(bookCard);

        bookBox.className = 'bookBox'
        bookBox.textContent = book.title + ', ' + book.author + ', ' + book.genre + '.';
        bookCard.appendChild(bookBox);

        readIcon.className = 'readIcon'
        readIcon.textContent = book.read
        bookCard.appendChild(readIcon);

        delButton.className = 'delBook'
        delButton.textContent = '🗑'
        bookCard.appendChild(delButton);

        bookBox.setAttribute("idNum", books.indexOf(book));

        delButton.setAttribute("idNum", books.indexOf(book));
    
        delButton.addEventListener('click', function(e){

            let idNum = e.target.idNum;

            for (let i = 0; i < myLibrary.length; i++) {
                if (myLibrary[i].idNum == idNum) {
                    bookCard.remove();
                    console.log(myLibrary);
                    myLibrary.splice(i, 1);
                    break;
                }
            }
        });

        readIcon.addEventListener('click', function(e){
            const readStatus = e.target.textContent
            
            if (readStatus == 'Read'){
                e.target.textContent = 'Not Read';
                book.read = e.target.textContent;

            } else {
                e.target.textContent = 'Read';
                book.read = e.target.textContent;
            }

        });

    });
}

render(myLibrary);

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