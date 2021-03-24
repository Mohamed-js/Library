const myLibrary = [];
const cont = document.getElementById('container');

function Book(title = '', nop = 0, author = 'unknown', read) {
  this.title = title;
  this.nop = nop;
  this.author = author;
  this.read = read;
}

function displayBooks() {
  cont.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i += 1) {
    const card = document.createElement('div');
    const head = document.createElement('h3');
    const author = document.createElement('h6');
    const read = document.createElement('button');
    const nop = document.createElement('p');
    const deleteBook = document.createElement('button');

    card.classList.add('card');

    head.textContent = myLibrary[i].title;
    author.textContent = myLibrary[i].author;
    read.textContent = myLibrary[i].read;
    read.setAttribute('onclick', `read(${i})`);
    read.id = i;
    if (read.textContent === 'read') {
      read.classList.add('read');
    } else {
      read.classList.add('unread');
    }

    nop.textContent = myLibrary[i].nop;
    deleteBook.textContent = 'Remove this book';
    // deleteBook.setAttribute('onclick', `removeBook(${i})`);
    deleteBook.classList.add('deleteBook');

    card.appendChild(head);
    card.appendChild(author);
    card.appendChild(nop);
    card.appendChild(read);
    card.appendChild(deleteBook);

    cont.appendChild(card);
  }
  getButtons();
}

function hideForm() {
  document.getElementById('createBookForm').remove();
  document.getElementById('displayForm').style.display = 'block';
}

function addBookToLibrary() {
  const title = document.getElementById('title').value;
  const nop = document.getElementById('nop').value;
  const author = document.getElementById('author').value;
  const readStatus = document.getElementById('readStatus').value;
  const book = new Book(title, nop, author, readStatus);
  myLibrary.push(book);
  displayBooks();
  hideForm();
}

function displayForm() {
  const form = document.createElement('form');
  const title = document.createElement('input');
  const author = document.createElement('input');
  const nop = document.createElement('input');
  const select = document.createElement('select');
  const opt1 = document.createElement('option');
  const opt2 = document.createElement('option');
  const btn = document.createElement('button');

  const authorL = document.createElement('label');
  authorL.textContent = 'Author';
  const titleL = document.createElement('label');
  titleL.textContent = 'Title';
  const nopL = document.createElement('label');
  nopL.textContent = '#Pages';

  form.id = 'createBookForm';
  title.id = 'title';
  author.id = 'author';
  select.id = 'readStatus';
  nop.id = 'nop';
  opt1.value = 'read';
  opt1.textContent = 'read';
  opt2.value = 'unread';
  opt2.textContent = 'unread';
  btn.type = 'button';
  btn.id = 'createBook';
  btn.textContent = 'Add';

  select.appendChild(opt1);
  select.appendChild(opt2);
  form.appendChild(titleL);
  form.appendChild(title);
  form.appendChild(authorL);
  form.appendChild(author);
  form.appendChild(nopL);
  form.appendChild(nop);
  form.appendChild(select);
  form.appendChild(btn);

  document.body.appendChild(form);

  const createBookk = document.getElementById('createBook');
  createBookk.onclick = () => addBookToLibrary();
}

function removeBook(book) {
  myLibrary.splice(book, 1);
  displayBooks();
  console.log('This is being called');
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

const displayFormm = document.getElementById('displayForm');
displayFormm.onclick = () => displayForm();

function getButtons() {
  var k = document.querySelectorAll('.deleteBook');
  console.log(k);
  for (let i = 0;i < myLibrary.length;i++){
    k[i].addEventListener('click',removeBook(i));
  }
}

