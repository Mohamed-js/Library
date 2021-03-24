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
    let card = document.createElement('div');
    let head = document.createElement('h3');
    let author = document.createElement('h6');
    let read = document.createElement('button');
    let nop = document.createElement('p');
    let deleteBook = document.createElement('button');

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
    deleteBook.setAttribute('onclick', `removeBook(${i})`);

    card.appendChild(head);
    card.appendChild(author);
    card.appendChild(nop);
    card.appendChild(read);
    card.appendChild(deleteBook);

    cont.appendChild(card);
  }
}

function hideForm() {
  document.getElementById('createBookForm').remove()
  document.getElementById('displayForm').style.display = 'block';
}

function addBookToLibrary() {
  let title = document.getElementById('title').value;
  let nop = document.getElementById('nop').value;
  let author = document.getElementById('author').value;
  let read_status = document.getElementById('read_status').value;
  let book = new Book(title, nop, author, read_status);
  myLibrary.push(book);
  displayBooks();
  hideForm();
}

function displayForm() {
  let form = document.createElement('form');
  let title = document.createElement('input');
  let author = document.createElement('input');
  let nop = document.createElement('input');
  let select = document.createElement('select');
  let opt1 = document.createElement('option');
  let opt2 = document.createElement('option');
  let btn = document.createElement('button');

  let authorL = document.createElement('label');
  authorL.textContent = 'Author'
  let titleL = document.createElement('label');
  titleL.textContent = 'Title'
  let nopL = document.createElement('label');
  nopL.textContent = '#Pages'

  form.id = 'createBookForm'
  title.id = 'title'
  author.id = 'author'
  select.id = 'read_status'
  nop.id = 'nop'
  opt1.value = 'read'
  opt1.textContent = 'read'
  opt2.value = 'unread'
  opt2.textContent = 'unread'
  btn.type = 'button'
  btn.id = 'createBook'
  btn.textContent = 'Add'

  select.appendChild(opt1)
  select.appendChild(opt2)
  form.appendChild(titleL)
  form.appendChild(title)
  form.appendChild(authorL)
  form.appendChild(author)
  form.appendChild(nopL)
  form.appendChild(nop)
  form.appendChild(select)
  form.appendChild(btn)

  document.body.appendChild(form)

  const createBookk = document.getElementById('createBook');
  createBookk.onclick = () => addBookToLibrary()
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


const displayFormm = document.getElementById('displayForm');
displayFormm.onclick = () => displayForm();



