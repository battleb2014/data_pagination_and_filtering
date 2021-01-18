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

         const studentName = `${list[i].name.first} ${list[i].name.last}`
         const h3 = document.createElement('h3'); //Creates a h3 tag
         h3.textContent = studentName;

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

showPage(data, 1);
addPagination(data);