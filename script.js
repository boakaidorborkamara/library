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

// create and add new book to mylibrary array or database 
function addBookToLibrary() {

    // information needed to create new book 
    let new_book_info = getNewBookInfo();

    // create new book 
    let new_book =  new Book(new_book_info.name, new_book_info.author, new_book_info.pages, new_book_info.status);

    // add to array db 
    mylibrary.push(new_book);

    //display books from db
    displayBook();

    return 0;

}

//display books on the html page
function displayBook(){
    //get table element
    console.log("Displaying books fnx");

    let table_body = document.getElementById("table-body");
    console.log(table_body);

    let html;

    mylibrary.forEach((ele)=>{
        console.log(ele);
        html = `
            <tr>
                <td>${ele.title}</td>
                <td>${ele.author}</td>
                <td><button>${ele.read}</button></td>
                <td><button>Delete</button></td>
            </tr>
        `;   
    });

    table_body.insertAdjacentHTML("beforeend", html);

    return 0;
}

// displayBook();

add_new_btn.addEventListener("click",(e)=>{
    console.log("Working")
    e.preventDefault();
    addBookToLibrary();
})


