var websiteTitleInput = document.querySelector('.website-title');
var websiteUrlInput = document.querySelector('.website-url')
var enterButton = document.querySelector('.enter-button');
var readButton = document.querySelector('.read-button');
var deleteButton = document.querySelector('.delete-button');
var bookmarksUl = document.querySelector('ul');
var linkCounterDiv = document.querySelector('.link-counter');
var bookmarksArray = [];

websiteTitleInput.addEventListener('keyup', enableButton);
websiteUrlInput.addEventListener('keyup', enableButton);
enterButton.addEventListener('click', createBookmark);
bookmarksUl.addEventListener('click', styleReadDeleteButtons); 
bookmarksUl.addEventListener('click', deleteButton); 

function addBookmarkData() {
  bookmarksArray.push({
    websiteTitleInput: websiteTitleInput.value,
    websiteUrlInput: websiteUrlInput.value,
  });
};

function enableButton() {
  if (websiteTitleInput.value.length * websiteUrlInput.value.length > 0) {
    enterButton.removeAttribute('disabled');  
  }
}

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
    websiteTitleInput.value = '';
    websiteUrlInput.value = '';
    linkCounter();
    deleteButton.addEventListener('click', linkCounter);       
    };
  };

function styleReadDeleteButtons() {
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

function linkCounter() {
  var linkNumber = bookmarksArray.length;
  // var counter = document.createElement('h4');
  linkCounterDiv.innerText = `You have ${linkNumber} bookmark(s).`;
  console.log(linkNumber);
}


