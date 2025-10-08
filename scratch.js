console.log("hello");

/* git add
git commit
git push */


console.log("rama".length)


/* paste the solutions to chap 2 that he posted
*/

// 9-16 : Chapter 5

let arr = [3, 7, -2, 5];
console.log(arr.map(x => x+3));


let arr = [3, 7, -2, 5];
console.log(arr.map(x => x+3).filter(x => x > 2));

// higher order function 


function reduce(array, combine, start) {
    let current = start;
    for (let element of array) {
        current = combine(current, element);
    }
    return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

// reducing array

console.log([1, 2, 3, 4].reduce((a, b) => a + b));


// Chapter 6 notes

let protoRabbit = {
    speak(line) {
        console.log('The ${this.type} rabbit says '${line}'`);
    }
};
let blackRabbit = Object.create(protoRabbit);
console.log(blackRabbit);
blackRabbit.type = "black";
console.log(blackRabbit);
blackRabbit.speak("I am fear and darkness");
console.log(blackRabbit.toString());

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit. says '${line}`');
    }
}

let killerRabbit = new Rabbit("killer");
killerRabbit.speak("Screee!")
let niceRabbit = new Rabbit("meek");
niceRabbit.speak("There now...");


let george = new Set(3, 7, 8);

const mySetWithValues = new Set([1, 2, 3, 4, 5]);
console.log(mySetWithValues);
mySetWithValues.add(10);
console.log(mySetWithValues);
mySetWithValues.add(1);
console.log(mySetWithValues);


// static method example

class GCStudent {
    major = "";
    greek = "";
    favfolks = [];
    constructor(m, g) {
        this.major = m;
        this.greek = g;
    }
    makeFriends(person) {
        this.favfolks.push(person);
    }
    static makeStudent(friends) {
        let stud = new GCStudent("undeclared", "none");
        stud.favfolks = friends;
        return stud;
    }
}

let tyler = new GCStudent("art", "none");
console.log(tyler);
tyler.makeFriends("Jose");
console.log(tyler);

let Jose = GCStudent.makeStudent(["tyler", "Laura"]);
console.log(Jose);


// new - working with flattening arrays


let arr = [[1, 5] , [[3, 7, 2] , [4, 3, 8]] , [9]];
console.log arr.reduce((soFar, next) => soFar.concat(next));

function isSimpleArray(arr) {
    let isSimple = true;
    for (elem of arr) {
        if (Array.isArray(elem)) {
            isSimple = false;
        }
    }
    return isSimple;
}

let flat = false;
let result = arr;
while (!flat) {
    result = result.reduce((soFar, next) => soFar.concat(next));
    flat = isSimpleArray(result);
}
console.log(result)






// table-sort-notes scratch

// one random real number between 0 and 1:
console.log(Math.random());
//one random real number between 0 and 5:
console.log(5 * Math.random());
// one random real number between -2 and 2:
console.log(4 * Math.random());
// get the "floor" of a number:
console.log(Math.floor(-2, 7));
// a random whole number from 0 to 3:
console.log(Math.floor(4 * Math.random()));
// a random beast:
const beasts = ["pig", "horse", "leopard", "minotaur", "jackal", "buffalo"];
console.log(beasts[Math.floor(5 * Math.random())]);

//sorting a table start

function makeTableRow(obj) {
  let inner = "<tr>";
  for (let key of Object.keys(obj)) {
    if (key === "name") {
      const anchorHTML = `<a href="${obj["link"]}" target="_blank">${obj["name"]}<a/>`;
      inner += `<td>${anchorHTML}</td>`;
    } else if (key === "link") {
      inner += "";
    } else {
      inner += `<td>${obj[key]}</td>`;
    }
  }
  inner += "</tr>";
  return inner;
}