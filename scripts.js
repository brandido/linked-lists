// Variables
var websiteTitleInput = document.querySelector('website-title');
var websiteUrlInput = document.querySelector('website-url')
var enterButton = document.querySelector('.enter-button');
var readButton = document.querySelector('.read-button');
var deleteButton = document.querySelector('delete-button');
var container2 = document.querySelector('.container-2');

// Event Listeners
enterButton.addEventListener('click', createBookmark);

// Functions
function createBookmark(e) {
  e.preventDefault();
  // insert template literal
  // into DOM container 2
  var templateLiteral = `<section class="bookmark">
          <h2 class="website-title">${websiteTitleInput.value}</h2>
          <a href="${websiteUrlInput.value}" target="_blank"><h3>${websiteUrlInput.value}</h3></a>
          <div>
            <button class="read-button">Read</button>
            <button class="delete-button">Delete</button>
          </div>
      </section>`;
  console.log(templateLiteral);
  container2.innerHtml = templateLiteral;
      return templateLiteral;
}



// When the user clicks on the button for creating the bookmark, it should be added to the bookmarks section
// 

// When the user clicks on the “Mark as Read” button:
// ^ 

// A class of .read should be added to the bookmark
// ^ dom event that changes the styles bottom of lesson 3


// If it already has the class of .read, it should be removed
// ^ conditional to remove from dom as well as array (pop or slice method?)

// When the user clicks on the “Remove” button, the link should be removed from the page

// If the user omits the title or the URL, the application should not create the link and should instead display an error.
// The application should be responsive and work equally well on desktop and mobile.

// create ul - createElement

// append li - prependChild

// attach template literal to li

// need to store array of bookmarks

// use objects for different properties of bookmarks

// 

