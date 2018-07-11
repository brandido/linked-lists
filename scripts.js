
var websiteTitleInput = document.querySelector('.website-title');
var websiteUrlInput = document.querySelector('.website-url')
var enterButton = document.querySelector('.enter-button');
var readButton = document.querySelector('.read-button');
var deleteButton = document.querySelector('.delete-button');
var bookmarksUl = document.querySelector('ul');
var bookmarksArray = [];

// Event Listeners
enterButton.addEventListener('click', createBookmark);
bookmarksUl.addEventListener('click', styleReadButton); 
bookmarksUl.addEventListener('click', deleteButton); 

// Functions


// function deleteButton() {
//   var buttonClicked = event.target;
//   console.log(buttonClicked)
//   if (buttonClicked.className === 'delete-button') {
//       li.remove();
//   }
// }

function addBookmarkData() {
  bookmarksArray.push({
    websiteTitleInput: websiteTitleInput.value,
    websiteUrlInput: websiteUrlInput.value,
  });
};

function createBookmark(e) {
  e.preventDefault();
  if (websiteTitleInput.value.length * websiteUrlInput.value.length === 0) {
    alert('Yo! Please enter both a website title and webstire url.');
  } else {
    addBookmarkData();
  var newLi = document.createElement('li');
  newLi.innerHTML = 
    `<section class="bookmark">
          <h2 class="website-title">${websiteTitleInput.value}</h2>
          <a href="${websiteUrlInput.value}" target="_blank"><h3>${websiteUrlInput.value}</h3></a>
            <button class="read-button">Read</button>
            <button class="delete-button">Delete</button>         
      </section>`;
  bookmarksUl.appendChild(newLi);
    };
  };

function styleReadButton() {
  var buttonClicked = event.target;
  var li = event.target.parentNode.parentNode;
  if (buttonClicked.className === 'read-button') {
    buttonClicked.classList.add('button-already-read');
    li.classList.add('read-li');
  } else {
    buttonClicked.classList.remove('button-already-read');
    li.classList.remove('read-li');
  };
  if (buttonClicked.className === 'delete-button') {
      li.remove();
  }
};








// When the user clicks on the button for creating the bookmark, it should be added to the bookmarks section
// 

// When the user clicks on the “Mark as Read” button:
// ^ 

// A class of .read should be added to the bookmark
// ^ dom event that changes the styles bottom of lesson 3
// classList.add


// If it already has the class of .read, it should be removed
// ^ conditional to remove from dom as well as array (pop or slice method?)
// classList.remove

// When the user clicks on the “Remove” button, the link should be removed from the page

// If the user omits the title or the URL, the application should not create the link and should instead display an error.
// The application should be responsive and work equally well on desktop and mobile.

// create ul - createElement

// append li - prependChild

// attach template literal to li

// need to store array of bookmarks

// use objects for different properties of bookmarks

// Will need to use event.target and event.target.parentNode

