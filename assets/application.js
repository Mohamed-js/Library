const myLibrary = [],
  cont = document.getElementById('container'),
  create_book = document.getElementById('createBook'),
  display_form = document.getElementById('displayForm');

display_form.onclick = () => displayForm()
create_book.onclick = () => addBookToLibrary()

function Book(title = '', nop = 0, author = 'unknown', read = 'unread') {
  this.title = title;
  this.nop = nop;
  this.author = author;
  this.read = read;
}

function addBookToLibrary() {
  let title = document.getElementById('title').value;
  let nop = document.getElementById('nop').value;
  let author = document.getElementById('author').value;
  book = new Book(title, nop, author);
  myLibrary.push(book);
  displayBooks();
  hideForm();
}

function displayBooks() {
  cont.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    var card = document.createElement('div');
    var head = document.createElement('h3');
    var author = document.createElement('h6');
    var read = document.createElement('button');
    var nop = document.createElement('p');
    var deleteBook = document.createElement('button');

    card.classList.add('card');

    head.textContent = myLibrary[i].title;
    author.textContent = myLibrary[i].author;
    read.textContent = myLibrary[i].read;
    read.setAttribute('onclick', `read(${i})`);
    read.id = i;
    if (read.textContent == 'read') {
      read.classList.add('read');
    } else {
      read.classList.add('unread');
    }

    nop.textContent = myLibrary[i].nop;
    deleteBook.textContent = 'Remove this book';
    deleteBook.setAttribute('onclick', `removeBook(${i})`);

    card.appendChild(head);
    card.appendChild(author);
    card.appendChild(nop);
    card.appendChild(read);
    card.appendChild(deleteBook);

    cont.appendChild(card);
  }
}

function displayForm() {
  document.getElementById('createBookForm').style.display = 'block';
  document.getElementById('displayForm').style.display = 'none';
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('nop').value = '';
}

function hideForm() {
  document.getElementById('createBookForm').style.display = 'none';
  document.getElementById('displayForm').style.display = 'block';
}

function removeBook(book) {
  myLibrary.splice(book, 1);
  displayBooks();
}

function read(book) {
  displayBooks();
  if (myLibrary[book].read === 'read') {
    myLibrary[book].read = 'unread';
    document.getElementById(`${book}`).textContent = 'Unread';
    document.getElementById(`${book}`).classList.remove('read');
    document.getElementById(`${book}`).classList.add('unread');
  } else {
    myLibrary[book].read = 'read';
    document.getElementById(`${book}`).textContent = 'read';
    document.getElementById(`${book}`).classList.remove('unread');
    document.getElementById(`${book}`).classList.add('read');
  }
}
