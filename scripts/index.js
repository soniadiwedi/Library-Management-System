
const bookURL = `https://json-server-xyof.onrender.com/books`;
let mainSection = document.getElementById("data-list-wrapper");

const displayData=(data)=>{
  mainSection.innerHTML=""
 data.forEach((el)=>{
  const cards=`<div class="card" data-id=${el.id}>
  <div class="card-img">
  <img src="${el.image}" alt="Image">
  </div>
  <div class="card-body">
  <h4 class="card-title">${el.title}</h4>
  <hp class="card-author">${el.author}</p>
  <p class="card-category">${el.category}</p>
  <p class="card-price">${el.price}</p>
  <a href="#" data-id=${el.id} class="card-link">Edit</a>
  <button  data-id=${el.id} class="card-button">Delete</button>
   </div>
</div>`
const card = document.createElement('div');
    card.innerHTML += cards;
    card.classList.add('card-list')

    mainSection.appendChild(card);


    const editButtons = document.querySelectorAll('.card-link')
    editButtons.forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault()
        const bookId = el.dataset.id
        editbookfun(bookId)
        })
        })

    const deleteButtons = document.querySelectorAll('.card-button');
    deleteButtons.forEach(button => {
    const bookId = button.dataset.id;
    button.addEventListener('click', () => {
      deletefun(bookId);
    });


  });
 })
}

async function deletefun(bookId) {
 
  const response = await fetch(`${bookURL}/${bookId}`, {
    method: "DELETE",
  });
  const result = await response.json();
  fetchData();
}

// book
let bookTitleInput = document.getElementById("book-title");
let bookImageInput = document.getElementById("book-image");
let bookCategoryInput = document.getElementById("book-category");
let bookAuthorInput = document.getElementById("book-author");
let bookPriceInput = document.getElementById("book-price");
let bookCreateBtn = document.getElementById("add-book");

bookCreateBtn.addEventListener("click",async()=>{
  let obj={
    title:bookTitleInput.value,
    image:bookImageInput.value,
    category:bookCategoryInput.value,
    author:bookAuthorInput.value,
    price:+bookPriceInput.value

  }

  try{
   let res=await fetch(bookURL,{
      method:'POST',
      body:JSON.stringify(obj),
      headers:{
        'Content-Type':'application/json'
      },
      
    })
   let data=res.json()
     fetchData(data)
     bookTitleInput.value=""
     bookAuthorInput.value=""
     bookCategoryInput.value=""
     bookPriceInput.value=""
     bookImageInput.value=""
    
   
  }catch(err){
    console.log(err);
  }
})

// Update book
const editbookfun=async(id)=>{
  try{
    const res=await fetch(`${bookURL}/${id}`)
    const data=await res.json()
    updateBookIdInput.value=data.id
    updateBookTitleInput.value=data.title
    updateBookImageInput.value=data.image
    updateBookCategoryInput.value=data.category
    updateBookAuthorInput.value=data.author
    updateBookPriceInput.value=data.price
    updatePriceBookId.value=data.id
    updatePriceBookPrice.value=data.price
  }catch(err){
    console.log(err);
  }
}
let updateBookIdInput = document.getElementById("update-book-id");
let updateBookTitleInput = document.getElementById("update-book-title");
let updateBookImageInput = document.getElementById("update-book-image");
let updateBookAuthorInput = document.getElementById("update-book-author");
let updateBookCategoryInput = document.getElementById("update-book-category");
let updateBookPriceInput = document.getElementById("update-book-price");
let updateBookBtn = document.getElementById("update-book");

updateBookBtn.addEventListener("click",async()=>{
  const obj={
   
    title:updateBookTitleInput.value,
    image:updateBookImageInput.value,
    author:updateBookAuthorInput.value,
    category:updateBookCategoryInput.value,
    price:+updateBookPriceInput.value,
    }
    let id=updateBookIdInput.value
    try{
      let res=await fetch(`${bookURL}/${id}`,{
        method:'PATCH',
        body:JSON.stringify(obj),
        headers:{
          'Content-Type':'application/json'
          }
      })
      if(res.ok){
        console.log(res.status)

        // let data=await res.json()
        // console.log(data)
        fetchData()
        updateBookIdInput.value="" 
        updateBookTitleInput.value=""
        updateBookImageInput.value=""
        updateBookAuthorInput.value=""

        updateBookCategoryInput.value=""
        updateBookPriceInput.value=""

    }
    }catch(err){
      console.log(err);
      }

})

//Update price
let updatePriceBookId = document.getElementById("update-price-book-id");
let updatePriceBookPrice = document.getElementById("update-price-book-price");
let updatePriceBookPriceButton = document.getElementById("update-price-book");
updatePriceBookPriceButton.addEventListener("click",async()=>{
  let price=Number(updatePriceBookPrice.value)
  const obj={
    price
    }
    let id=updatePriceBookId.value
    try{
      let res=await fetch(`${bookURL}/${id}`,{
        method:'PATCH',
        body:JSON.stringify(obj),
        headers:{
          'Content-Type':'application/json'
          }
      })
      if(res.ok){
        console.log(res.status)

        // let data=await res.json()
        // console.log(data)
        fetchData()
        updatePriceBookId.value=""
        updatePriceBookPrice.value=""
    }
    }catch(err){
      console.log(err);
      }
})

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
sortAtoZBtn.addEventListener('click',async()=>{
  try{
    let res=await fetch (`${bookURL}?_sort=price&_order=asc`)
    let data=await res.json()
    console.log("data",data);
    displayData(data)
    }catch(err){
      console.log(err);

    }
})

let sortZtoABtn = document.getElementById("sort-high-to-low");
sortZtoABtn.addEventListener('click',async()=>{
  try{
    let res=await fetch (`${bookURL}?_sort=price&_order=desc`)
    let data=await res.json()
    console.log("data",data);
    displayData(data)
    }catch(err){
      console.log(err);

    }
})
let filterClassic = document.getElementById("filter-Classic");


let filterFantasy = document.getElementById("filter-Fantasy");
let filterMystery = document.getElementById("filter-Mystery");
filterClassic.addEventListener("click",()=>{
  console.log("classic filter worked")
  const filteredBooks = booksData.filter(book => book.category === "Classic");
  displayData(filteredBooks)
})

/*********************  Filter for Fantasy Category    **********************/

filterFantasy.addEventListener("click",()=>{
  console.log("classic filter worked")
  const filteredBooks = booksData.filter(book => book.category === "Fantasy");
  displayData(filteredBooks)
})

/*********************  Filter for Mystery Category    **********************/

filterMystery.addEventListener("click",()=>{
  console.log("classic filter worked")
  const filteredBooks = booksData.filter(book => book.category === "Mystery");
  displayData(filteredBooks)
})

//Search by title/author

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

searchByButton.addEventListener("click",()=>{
  console.log("hii");
  let title = searchBySelect.value;
  let item=searchByInput.value.trim()
  if(title==="title"){
    console.log(item)
    const filteredBooks = booksData.filter(book => book.title.toLowerCase().includes(item.toLowerCase()));
    displayData(filteredBooks)
  }else if(title==="author"){
    const filteredBooks = booksData.filter(book => book.author.toLowerCase().includes(item.toLowerCase()));
    displayData(filteredBooks)

  }
  })

//Books Data
let booksData = [];
const fetchData=async()=>{
  try{
    let res=await fetch(bookURL)
    let data=await res.json()
    booksData=data
    console.log(booksData);
    displayData(booksData)
  }catch(err){
    console.log(err);
  }
}
fetchData()