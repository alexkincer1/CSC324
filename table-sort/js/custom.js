/********************************************************************
 * 
 * This is the copy of Dr.White's answer for the table-assign homework!
 * 
 *******************************************************************/

 // The array of objects, one object for each artist.
 

 const artists = [
   {
     name: "Ms Scandalous",
     birthYear: 1985,
     link: "https://www.youtube.com/watch?v=2FPivlfvxu0"
   },
   {
    name: "Juggy D",
    birthYear: 1981,
    link: "https://www.youtube.com/watch?v=1jAc_-FVjdI"
  },
  {
    name: "Sukhbir Singh",
    birthYear: 1969,
    link: "https://www.youtube.com/watch?v=HiprNF9Jad0"
  },
  {
    name: "Abrar-ul-Haq",
    birthYear: 1989,
    link: "https://www.youtube.com/watch?v=-lnnVIP7FEc"
  },
  {
    name: "Rishi Rich",
    birthYear: 1970,
    link: "https://www.youtube.com/watch?v=O95-w2gACuA"
  }
];

populateTable(artists); 
 
 const nameButton = document.querySelector("#name-button");
 const dateButton = document.querySelector("#date-button");
 const randomButton = document.querySelector("#random-button");

 nameButton.addEventListener("click", sortbyName);
 dateButton.addEventListener("click", sortbyDate);
 randomButton.addEventListener("click", randomize);

function sortbyName() {
  console.log("Sorting by name...");

  function byName(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
   }
  // now, sort:
 const sortedByName = artists.sort(byName);
 const tab = document.querySelector("#bhangra");
 tab.innerHTML = "";
 populateTable(sortedByName);
}

 function sortbyDate() {
  console.log("Sorting by year...");
  const sortedByDate = [...artists].sort((a, b) => a.birthYear - b.birthYear);
  populateTable(sortedByDate);
  console.log("date");
 }

 function randomize() {
  console.log("Randomizing...");
  const shuffled = [...artists].sort(() => Math.random()- 0.5);
  populateTable(shuffled);
  console.log("random");
 }

 function populateTable(arr) {

// code that populates the table:

// locate the table:
const tab = document.querySelector("#bhangra");

 // declare a string to hold the inner html.

let contents = "<tbody>";

// get in the header row:
contents += `
    <tr>
      <th>Name</th>
      <th>Year of Birth</th>
      <th>Link</th>
    </tr>
    `;

// now loop to make the data-rows:

arr.forEach(artist => {
  // open the row:
  contents += "<tr>";
  contents += `<td>${artist.name}</td>`;
  contents += `<td>${artist.birthYear}</td>`;
  contents += `<td><a href="${artist.link}" target = "_blank">${artist.link}</a></td>`;
  // close the row:
  contents += "</tr>"
});

// close out the table body:
contents += "</tbody>";

// now make contents be the inner html of
// the table:
tab.innerHTML = contents;
 }
 
/* This code was taken from the solution Dr.White gave us in class and via email because I did not
receive a 100 on my assignment. So, I built this assignment off of the correct code. In addition
to emailing that, we also discussed in it class where I was left to do a few lines on my own to 
ensure that the code would work and function properly. When adjusting the "randomizer" button, I
had tried a few whole numbers but wasn't really understanding their purpose. All I knew was, based
on not using a number when I was originally attempting to create a solition, that a number was
need. So, I asked chatGPT then eventually came to 0.5 as it only made sense to be a number that is
used often, but couldn't be a whole number because I had just about tried every one possible. Here is
my chatGPT conversation: 
https://chatgpt.com/share/68f85092-7258-8002-808a-38db8bfeb79b
this conversation showed me that the 0.5 is needed as a pivot point to let sort randomly swap the
elements being considered. If the number was not there, the automatic assumption would be that A>B.
This would cause little to no change in the array and there would not be a shuffle. 
*/
