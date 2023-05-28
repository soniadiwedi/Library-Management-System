# 🏫 Library Management System 📚


# Important files
```
├── index.html
├── scripts
│   └── main.js
└── styles
    └── style.css
```








### Ability to add new Books
<!-- ![add book ] -->
<img src="https://user-images.githubusercontent.com/101581634/235060588-2499d6c6-4f61-4a25-97ed-fdd18fa677ed.png" width="100%"/>

<!-- ![added book UI]() -->
<img src="https://user-images.githubusercontent.com/101581634/234911011-33340c63-6387-4826-a4f1-cce636f9b710.png" width="100%"/>

###  Ability to delete a Book




###  Ability to update all the fields of a book

1. To update all fields 

- `#update-book-id`  should be populated with the `id` of the book 
- `#update-book-title` should be populated with the `title` of the book
- `#update-book-image` should be populated with the `image URL` of the book
- `#update-book-author` should be populated with the `author` of the book
- `#update-book-category` should be populated with the `category` of the book
- `#update-book-price` should be populated with the `price` of the book

<img src="https://user-images.githubusercontent.com/101581634/235060572-a3de7f7c-c9ef-48a0-af24-90880a463121.png" width="100%"/>



###  Ability to update only the Price 

- Able to populate the following input on edit link click.
- `#update-price-book-id` should be populated with the `id` of the book
- `#update-price-book-price` should be populated with the `price` of the book

- Once the edit inputs are populated, if the user clicks `#update-price-book` button. 
- the price of that particular book should update based on the value entered in the `#update-price-book-price`. 
- The price of the book in the list should update without any page *reloads*.



### Sorting Books Based on Price 
- Sorting for `Low to High` UI:
<!-- ![sort Low to high] -->
<img src="https://user-images.githubusercontent.com/101581634/235060584-78f67972-8ccb-4728-aa26-015c0e398e01.png" width="100%"/>

With the click of the button `#sort-low-to-high`, the book list should be sorted in ascending order based on their *price*.

With the click of the button `#sort-high-to-low`, the book list should be sorted in descending order based on their *price*.



###  Filtering Books based on the category 
There are three types of filters as
 1. ***Classic***
 2. ***Fantasy***
 3. ***Mystery***
- Filtering for `Fantasy` UI:
<!-- ![filter fantacy] -->
<img src="https://user-images.githubusercontent.com/101581634/235060576-71febb24-2776-48bd-baa3-820340337bf8.png" width="100%"/>

When the button `#filter-Classic` is clicked, the book list is expected to be filtered. It should only show the books whose `category` is ***`Classic`***.

When the button `#filter-Fantasy` is clicked, the book list is expected to be filtered. It should only show the books whose `category` is ***`Fantasy`***.

When the button `#filter-Mystery` is clicked, the book list is expected to be filtered. It should only show the books whose `category` is ***`Mystery`***.



###  Search by title/author
- To implement search functionality on top there is a select tag with *options* as to search by category  
 1. ***`title`***
 2. ***`author`***
<!-- ![search by title] -->
<img src="https://user-images.githubusercontent.com/101581634/235060578-5d444e0f-9d97-4ac0-bca4-cafe1688b39a.png" width="100%"/>

first select(`select#search-by-select`) category and then type input (`input#search-by-input`) value for `title name` / `author name` and apply to `booksData` on click of search button(`button#search-by-button`).

