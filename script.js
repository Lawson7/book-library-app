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
    
        delButton.addEventListener('click', function(e){

            const num = e.target.id;
            console.log(num)

            for (let i = 0; i < myLibrary.length; i++) {
                if (bookBox.id == num && myLibrary.length <= 1){
                    myLibrary.splice(0, 1);
                    bookCard.remove();
                    console.log(myLibrary);
                }
                else if (bookBox.id == num) {
                    myLibrary.splice(num, 1);
                    bookCard.remove();
                    console.log(myLibrary);
                }
            }
        });

        readIcon.addEventListener('click', function(e){
            const readStatus = e.target.textContent
            
            if (readStatus == 'Read'){
                e.target.textContent = 'Not Read';
                book.read = e.target.textContent;
                readIcon.className = 'readIconNo'

            } else {
                e.target.textContent = 'Read';
                book.read = e.target.textContent;
                readIcon.className = 'readIconYes'
            }

        });

    });
}

render(myLibrary);



function openForm() {
    document.getElementById("formDisplay").style.display = "inline-block";
  }


function closeForm() {
    document.getElementById("formDisplay").style.display = "none";
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