/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

{/* <li class="student-item cf">
          <div class="student-details">
            <img class="avatar" src="https://randomuser.me/api/portraits/women/25.jpg" alt="Profile Picture">
            <h3>Ethel Dean</h3>
            <span class="email">ethel.dean@example.com</span>
          </div>
          <div class="joined-details">
            <span class="date">Joined 12-15-2005</span>
          </div>
        </li> */}



function showPage() {
   const ul = document.querySelector('ul');
   const li = document.createElement('li');
   li.className = 'student-item cf';

   const studentDiv = document.createElement('div');
   studentDiv.className = 'student-details';

   const img = document.createElement('img');
   img.className = 'avatar';
   img.src = 'https://randomuser.me/api/portraits/women/25.jpg';
   img.alt = 'Profile Picture';

   const h3 = document.createElement('h3');

   const emailSpan = document.createElement('span');
   emailSpan.className = 'email';
   emailSpan.textContent = 'ethel.dean@example.com';

   const detailsDiv = document.createElement('div');
   detailsDiv.className = 'joined-details';

   const dateSpan = document.createElement('span');
   dateSpan.className = 'date';
   dateSpan.textContent = 'Joined 12-15-2005';

   ul.appendChild(li);
   li.appendChild(studentDiv);
   li.appendChild(detailsDiv);
   studentDiv.appendChild(img);
   studentDiv.appendChild(h3);
   studentDiv.appendChild(emailSpan);
   detailsDiv.appendChild(dateSpan);
}
console.log(showPage());
/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination() {

}

// Call functions
