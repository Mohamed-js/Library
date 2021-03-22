let myLibrary = [];
let title1 = "The first Book"
let title2 = "The second Book"
let title3 = "The third Book"

function Book(title, description= "...", author= "unknown", read = false) {
    this.title = title;
    this.description =  description;
    this.author = author;
    this.read = read
}

book1 = new Book(title1)
book2 = new Book(title2)
book3 = new Book(title3)
// console.log(book)

function addBookToLibrary(book) {
    myLibrary.push(book)
}

addBookToLibrary(book1)
addBookToLibrary(book2)
addBookToLibrary(book3)




let cont = document.getElementById("container");

var card = document.createElement("div");

var head = document.createElement("h3");
var author = document.createElement("h6");
var read = document.createElement("h6");
var desc = document.createElement("p");

card.classList.add("card")

head.textContent = myLibrary[0].title
author.textContent = myLibrary[0].author
read.textContent = myLibrary[0].read
desc.textContent = myLibrary[0].description

card.appendChild(head)
card.appendChild(author)
card.appendChild(desc)
card.appendChild(read)

cont.appendChild(card)

