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