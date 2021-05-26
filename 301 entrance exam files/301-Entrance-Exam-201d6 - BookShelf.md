# 301 Entrance Exam

### Instructions:
### Make sure before starting to:
- turn off any means of communication (phone, slack, email).
- start your screen recording.
- you are not allowed to use previous projects, notes , or GitHub.
- you can use google search engine.
- use the console to debug.

## Exam:
Create a new repository on your Github and name it 'My-Book-Shelf'.

### Build a one-page website using HTML, CSS, and Javascript. The wireframe of the targeted page is attached to Slack.
You will be building a simple webpage "My Book Shelf" which contains all of the books that you will buy.

As a user, I would like to add my to-read books table so I can track my to-read books.
- Create a form in order to add the book name, the number of book pages and book category. the category should be one of a predefined list that contains the following ategories: 
Fantasy, Science Fiction, History, Science 

As a user, I would like to check the book price.
- Whenever we add a new book, you should calculate the book price as a random number between 3 and 8.

As a user, I would like to view all of my books that I already added so that I can quickly view my to-read list.
- Whenever you add a book using the form, you should use the local storage in order to get all the books from it and render them as a table using DOM.


**Stretch Goals:** 
As a user, I would like to view the total number of pages of all my to-read books so that I can know how many pages I will read as a total
- Whenever you add a new book, you should add the number of it's pages to the total number of pages and update the value on the page.

As a user, I would like to delete any read book so I can handle my to-read list all the time.
- When you press on the 'X', the book should be deleted from the DOM and the local storage, and it's number of pages should be deducted from the total number of pages of all to-read books

**Your final result should look like somehow as the result at the attached video on Slack**

#### Do this work on the 'master' branch.

1. Create an HTML file and convert the wireframe into HTML structure.
2. Create a CSS file to apply the style.
- The used font is "Roboto" -> google font.
- The used colors are "#F5F5DC", "#320D6D", rgb(50, 13, 109,.8).
3. Create a js file to handle the functionality.
- Handle adding the books to the table and local storage.
- Handle calculating the random price.
- Handle getting the books from the local storage and display them.
- Handle calculating and displaying the total number of pages in all books **(Stretch Goal)**.
- Handle removing the books from the list **(Stretch Goal)**.

Grades Rubic: 
- HTML (5)
  header: 1
  form: 4

- CSS (30)
  header: 5
  background image: 5
  form: 10
  table: 10

- JavaScript (50)
  book constructor, properties and prototypes: 10
  event listener and retreiving form data: 10
  save data to local storage: 5
  check and load data from local storage: 10
  render the header: 5
  render the table: 10

- General (15)
  code style: 5
  full run: 10

- Strech golas (10)


#### P.S.: you MUST use constructor and local storage in order to solve this problem PLUS when you refresh the page, all the data should be persistent.


## Submission Instructions:
- Submit the link of your GitHub repo.
- Submit your live URL after deploying your site with GitHub pages.
- Submit the link of your recorded video (you can upload it to your google drive or dropbox then share the link).
- After completing the exam, do **NOT** commit or push anything to your repo.