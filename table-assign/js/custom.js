/********************************************************************
 * 
 * This is Alex Kincer's homework for the Bhangra table-assign homework!
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

const target = document.getElementById("bhangra");
const bhangraTable = makeTable(artists);
target.appendChild(bhangraTable);

/* The place of code above looks at each element in mountains before appending it to the
newly created table. */

// utility function

// function to make a tabke from an array of objects:
function makeTable(arr) {
  // create a table element:
  const table = document.createElement("table");
  // use first object inthe array to make the header:
  table.innerHTML = makeTableHeader(arr[0]);
  for (let obj of arr) {
    table.innerHTML += makeTableRow(obj);
  }
  console.log(table.innerHTML);
  // do not forget to return to the table:
  return table
}

// function to make a table header:
function makeTableHeader(obj) {
  let inner = "<tr>";
  // fill it in with the th-elements:
  for (let columnName of Object.keys(obj)) {
    if (columnName !== "url") {
      inner += `<th>${columnName}</th>`;
    }
  }
  // add the closer:
  inner += "</tr>";
  console.log(inner);
  return inner;
}

// function to make a table row:
function makeTableRow(obj) {
  let inner = "<tr>";
  for (let key of Object.keys(obj)) {
    if (key === "link") {
      // creating the clickable link column
      const anchorHTML = `<a href="${obj[key]}" target="_blank">${obj[key]}</a>`;
      inner += `<td>${anchorHTML}</td>`;
      } else { 
        inner += `<td>${obj[key]}</td>`;
      }
    }
    inner += "</tr>";
    return inner;
  }


/* I recieved majority of this answer through in-class discussion and a screenshare
from classmate Mason on October 7, 2025. */

/*
Taking Mason's code from the screenshare in class, I took the makeTableRow portion
and changed "name" in line 82 and changed it to key so the hyperlink on the actual
browser appears in the link column to take you to youtube. I also deleted 3-4 if else
rows in his code as Dr. White stated it was unnecessary and it was causing a mix up for
me in what I was trying to link and not link. His original code gave no links, then
as I was editing I played commands in the wrong spot so it was linking name rather
than the actual link column. By moving this, there is now a clickable link. I changed
1 line (line 82) and omitted a few lines from his code but all were in the makeTableRow
section.
*/
