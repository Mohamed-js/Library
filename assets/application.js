/* eslint-disable max-classes-per-file */
/* eslint-disable class-methods-use-this */
const myLibrary = [];
const cont = document.getElementById('container');
class Book {
  constructor(title = '', nop = 0, author = 'unknown', read) {
    this.title = title;
    this.nop = nop;
    this.author = author;
    this.read = read;
  }
}

class LibraryMethods {
  /* eslint-disable no-use-before-define */
  hideForm() {
    document.getElementById('createBookForm').remove();
    document.getElementById('displayForm').style.display = 'block';
  }

  addBookToLibrary() {
    const title = document.getElementById('title').value;
    const nop = document.getElementById('nop').value;
    const author = document.getElementById('author').value;
    const readStatus = document.getElementById('readStatus').value;
    const book = new Book(title, nop, author, readStatus);
    myLibrary.push(book);
    this.displayBooks();
    this.hideForm();
  }

  displayBooks() {
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
      read.setAttribute('onclick', `myMethods.read(${i})`);
      read.id = i;
      if (read.textContent === 'read') {
        read.classList.add('read');
      } else {
        read.classList.add('unread');
      }

      nop.textContent = myLibrary[i].nop;
      deleteBook.textContent = 'Remove this book';
      deleteBook.classList.add('deleteBook');

      card.appendChild(head);
      card.appendChild(author);
      card.appendChild(nop);
      card.appendChild(read);
      card.appendChild(deleteBook);

      cont.appendChild(card);
    }
    this.getButtons();
    /* eslint-enable no-use-before-define */
  }

  removeBook(book) {
    myLibrary.splice(book, 1);
    this.displayBooks();
  }

  displayForm() {
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

    const dispFormButton = document.getElementById('displayForm');
    const { body } = document;
    body.insertBefore(form, dispFormButton);

    const createBookk = document.getElementById('createBook');
    createBookk.onclick = () => this.addBookToLibrary();
    document.getElementById('displayForm').style.display = 'none';
  }

  /* eslint-disable no-unused-vars */
  read(book) {
    this.displayBooks();
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

  getButtons() {
    const k = document.querySelectorAll('.deleteBook');
    for (let i = 0; i < myLibrary.length; i += 1) {
      k[i].onclick = () => this.removeBook(i);
    }
  }
  /* eslint-enable no-unused-vars */
}

const displayFormm = document.getElementById('displayForm');
const myMethods = new LibraryMethods();
displayFormm.onclick = () => myMethods.displayForm();

/* eslint-enable max-classes-per-file */
/* eslint-enable class-methods-use-this */
