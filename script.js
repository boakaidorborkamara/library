let add_new_btn = document.getElementById("new-book-btn");
console.log(add_new_btn);

// library db 
let mylibrary = [];

// book constructor 
function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = ()=>{

        return `${this.title},${this.author}, ${this.pages}, ${this.read}`

    }
}

// Get info for new book 
function getNewBookInfo(){

    let book_name = document.querySelector("#book-name");
    let pages = document.querySelector("#pages");
    let author = document.querySelector("#author");
    let status = document.querySelector("#status");
    let book_info = {name:book_name.value , pages:pages.value, author:author.value , status:status.value}

    return book_info

}

// add new book to mylibrary array or database 
function addBookToLibrary() {
    // do stuff here
    let new_book = getNewBookInfo();
    let book = new Book(new_book.name, new_book.author,new_book.pages, new_book.status)
    console.log(book);
}

add_new_btn.addEventListener("click",(e)=>{
    console.log("Working")
    e.preventDefault();
    addBookToLibrary();
})


