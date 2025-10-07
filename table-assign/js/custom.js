/********************************************************************
 * 
 * Your introductory remarks go here.
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
    if (key === "name") {
      const anchorHTML = `<a href="${obj["url"]}" target="_blank">${obj["name"]}</a>`;
      inner += `<td>${anchorHTML}</td>`;
      } else if (key === "url") {
       inner += "";
      } else { 
        inner += `<td>${obj[key]}</td>`;
      }
    }
    inner += "</tr>";
    return inner;
  }
