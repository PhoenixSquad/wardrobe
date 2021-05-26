let myForm = document.getElementById('myForm');

function Book(name, pages, category) {
  this.name = name;
  this.pages = pages;
  this.category = category;
  this.price = getRndInteger(3, 9);
  Book.all.push(this);
}
Book.all = [];
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
myForm.addEventListener('submit', addToTable);
function addToTable(e) {
  e.preventDefault();
  let newBook = new Book(e.target.bookName.value, e.target.numOfPages.value, e.target.category.value);
  localStorage.setItem('book', JSON.stringify(Book.all));
  window.location.reload();
  console.log(Book.all);
}
let myTable = document.getElementById('myTable');

let localBook = JSON.parse(localStorage.getItem('book'));
if (localBook !== null) {
  Book.all = localBook;
}
console.log(Book.all);
for (let i = 0; i < Book.all.length; i++) {
  let trEl = myTable.appendChild(document.createElement('tr'));
  let tdEl = trEl.appendChild(document.createElement('td'));
  let tdE2 = trEl.appendChild(document.createElement('td'));
  let tdE3 = trEl.appendChild(document.createElement('td'));
  let tdE4 = trEl.appendChild(document.createElement('td'));
  let tdE5 = trEl.appendChild(document.createElement('td'));
  tdEl.textContent = Book.all[i].name;
  tdE2.textContent = Book.all[i].pages;
  tdE3.textContent = Book.all[i].price;
  tdE4.textContent = Book.all[i].category;
  tdE5.textContent = 'X';
  tdE5.setAttribute('class', 'remove');
}
let removeButton = document.getElementsByClassName('remove');
console.log(removeButton.length);
for (let i = 0; i < removeButton.length; i++) {
  removeButton[i].addEventListener('click', removeRow);

  function removeRow(e) {
    e.target.parentElement.remove();
    Book.all.splice(i,1);
  localStorage.setItem('book', JSON.stringify(Book.all));
  }

}

