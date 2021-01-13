function showPage(list, page) {

   const ul = document.querySelector('ul');
   ul.innerHTML = ''; //Start with a blank page

   const firstIndex = (page * 9) - 10; //Index of first li to display
   const lastIndex = page * 9; //Index of last li to display

   for (let i = 0; i < list.length; i++) { //Loop through data object
      if (i > firstIndex && i < lastIndex) { //Display only 9 li per page
         const li = document.createElement('li'); //Creates li tag
         li.className = 'student-item cf'; //Sets li tags class name

         const studentDiv = document.createElement('div'); //Creates div tag
         studentDiv.className = 'student-details'; //Sets div tags class name

         const img = document.createElement('img'); //Creates img tag
         img.className = 'avatar'; //Sets img tag name to avatar
         img.src = list[i].picture.thumbnail; //Sets img src to appropriate link
         img.alt = 'Profile Picture'; //Sets img alt 

         const h3 = document.createElement('h3'); //Creates a h3 tag

         const emailSpan = document.createElement('span'); //Creates a span tag
         emailSpan.className = 'email'; //Sets spans class name
         emailSpan.textContent = list[i].email; //Sets spans text content to appropriate email address

         const detailsDiv = document.createElement('div'); //Creates a div tag
         detailsDiv.className = 'joined-details'; //Sets divs class name

         const dateSpan = document.createElement('span'); //Creates a span tag
         dateSpan.className = 'date'; //Sets spans class name
         dateSpan.textContent = list[i].registered.date; ////Sets divs text content

         //Adds appropriate tags to page
         ul.appendChild(li);
         li.appendChild(studentDiv);
         li.appendChild(detailsDiv);
         studentDiv.appendChild(img);
         studentDiv.appendChild(h3);
         studentDiv.appendChild(emailSpan);
         detailsDiv.appendChild(dateSpan);
      }
   }
}

function addPagination(list) {

   const ul = document.querySelector('.link-list'); //REfrences appropriate ul tag
   const numOfButtons = Math.ceil(list.length / 9); //Number of buttons displayed

   for (let i = 0; i < numOfButtons; i++) { //Displays appropriate number of buttons

      const li = document.createElement('li'); //Creates li tag
      ul.appendChild(li); //Adds li to page

      const button = document.createElement('button'); //Creates button tag
      button.type = 'button'; //Sets button type to button
      button.textContent = i + 1; //Sets buttons text content to appropriate number
      li.appendChild(button); //Adds button to page
   }

   const firstButton = ul.querySelector('button'); //Identifies first button
   firstButton.className = 'active'; //Sets first button as active by default

   ul.addEventListener('click', (e) => { // Assign active class onclick and show corrisponding page
      const active = ul.querySelector('.active'); //Selects button with the class name of active
      active.className = ''; //Sets currently active buttons class name to an empty string
      e.target.className = 'active'; //Sets clicked buttons class name to active

      showPage(data, e.target.textContent); //Displays appropriate content
   });
}

{/* <label for="search" class="student-search">
            <input id="search" placeholder="Search by name...">
            <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
          </label> */}

function notFound() {
   const studentUl = document.querySelector('.student-list');
   const paginateUl = document.querySelector('.link-list');
   const paginateLi = paginateUl.querySelector('li');

   const h2 = document.createElement('h2');
   h2.textContent = 'Student not found';

   studentUl.appendChild(h2);

   for (let i = 0; i < paginateLi.length; i++) { //Loop through and remove all existing paginated links
      paginateUl.removeChild(paginateLi[i]);
   }
}

function addSearchBar(list) {
   const header = document.querySelector('.header'); //Selects the header tag

   const label = document.createElement('label'); //Creates label tag
   label.for = 'search';
   label.className = 'student-search';

   const searchInput = document.createElement('input'); //Creates input tag
   searchInput.id = 'search';
   searchInput.placeholder = 'Search by name...';

   const searchButton = document.createElement('button'); //Creates button tag
   searchButton.type = 'button';

   const img = document.createElement('img'); //Creates img tag
   img.src = '../img/icn-search.svg'; //Sets imgs src
   img.alt = 'Search Icon'; //Sets imgs alt

   //Adds search bar and button to page
   header.appendChild(label);
   label.appendChild(searchInput);
   label.appendChild(searchButton);
   searchButton.appendChild(img);

}

function search(list) {

   const inputVal = searchInput.value.toLowerCase();
   const searchList = [];

   for (let i = 0; i < list.length; i++) {
      let name = list[i].name.first.toLowerCase();
      name += ' ';
      name += list[i].name.last.toLowerCase();

      if (name.includes(inputVal)) {
         searchList.push(list[i]);
      }

      if (searchList.length > 0) {
         showPage(searchList, 1);
         addPagination(searchList);
      } else {
         notFound();
      }

   }

   searchInput.addEventListener('keyup', search());
   searchButton.addEventListener('click', search());
}

// Call functions

showPage(data, 1);
addPagination(data);
addSearchBar(data);