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

// sort the artists by name

// first a function to sort by name:
function byName(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
 }

 // now, sort:
 console.log(artists.sort(byName));

// pick a random artist
function pickArtist() {
  const randomIndex = Math.floor(Math.random() * artists.length);
  return artists[randomIndex].name;
}

console.log(pickArtist());

// Shuffle the artists randomly:

// first, a shuffling method adapted from
 // https://www.kirupa.com/html5/shuffling_array_js.htm

 Array.prototype.shuffle = function() {
  let input = this;
  for (let i = input.length-1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random()*(i+1)); 
    let itemAtIndex = input[randomIndex]; 
    input[randomIndex] = input[i]; 
    input[i] = itemAtIndex;
  }
 return input;
};

const myArray = [1,2,3,4,5,6,7,8,9,10];
console.log(myArray.shuffle());
console.log(artists.shuffle());

// Suppose that this js file gets loaded by
// the browser when it parses some html file,
// and suppose that the html file has a button
// as in the table-sort assignment.
// Then you could use the above ideas to add
// an event-listener to the button
// to show a randomly-selected artist:
  // const randomButton = document.querySelector("#random-button");
  // randomButton.addEventListener("click", showRandomArtist);

  // function showRandomArtist() {
  //   const artist = document.querySelector("#random-artist");
  //   artist.innerHTML = pickArtist();
  // }