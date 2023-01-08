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

// Get info for new book from frontend
function getNewBookInfo(){

    let book_name = document.querySelector("#book-name");
    let pages = document.querySelector("#pages");
    let author = document.querySelector("#author");
    let status = document.querySelector("#status");
    let book_info = {name:book_name.value , pages:pages.value, author:author.value , status:status.value}

    return book_info

}

// create and add new book to database array
function addBookToDatabaseArray() {

    // information needed to create new book 
    let new_book_info = getNewBookInfo();

    // create new book based on the new book info
    let new_book =  new Book(new_book_info.name, new_book_info.author, new_book_info.pages, new_book_info.status);

    // add to new book to db array 
    mylibrary.push(new_book);

    //display books from db
    displayBookFromDatabase();

    deleteBook();

    return 0;

}

//display books on the html page
function displayBookFromDatabase(){
    //get table element
    console.log("Displaying books fnx");

    let table_body = document.getElementById("table-body");

    let html;

    // loop through database array and create new html element 
    mylibrary.forEach((ele, index)=>{

        console.log(index);

        html = `
            <tr id=table-row-${index}>
                <td>${ele.title}</td>
                <td>${ele.author}</td>
                <td><button id=${index}>${ele.read}</button></td>
                <td><button class="delete-btn" id=${index}>Delete</button></td>
            </tr>
        `;   

    });

    
    table_body.insertAdjacentHTML("beforeend", html);
    console.log(mylibrary.length, "in display book fnx")

    return 0;
}

//delete an existing book
function deleteBook(){
    let delete_btns = document.querySelectorAll(".delete-btn");
    // console.log(delete_btns);

    
    delete_btns.forEach((ele)=>{
        // console.log(ele);
        ele.addEventListener("click",(e)=>{

            //get the index for the book which the currently clicked delete btn is attached to
            let book_index = e.target.getAttribute("id");

            //remove the book that is being targeted from myLibrary array / db
            console.log("deleting from db")
            mylibrary.splice(book_index,1);
            console.log("done deleting")
            console.log(mylibrary);

            let targeted_table_row = document.getElementById(`table-row-${book_index}`);
            console.log(targeted_table_row);
            // targeted_table_row.remove();
            
            // console.log(mylibrary.length);

            //update the dom with changes made in the db
            // displayBook();
        })
    })
}


add_new_btn.addEventListener("click",(e)=>{
    console.log("Working")
    e.preventDefault();
    addBookToDatabaseArray
})


