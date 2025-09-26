// Alex Kincer

// Flattening

/*
Use the reduce method in combination with the concat method to "flatten" an
array of arrays into a single array that has all the elements of the 
original arrays.
*/ 

let arrays = [[1, 2, 3], [4, 5], [6]];

let flattened = arrays.reduce((acc, curr) => acc.concat(curr), []);

console.log(flattened);

console.log("\n Or ");

let arrays2 = [[1, 2, 3], [4, 5], [6]];

let flattened2 = arrays2.reduce((acc, curr) => {
    return acc.concat(curr);
 }, []);

 console.log(flattened2);

let arrays3 = [3, [1, 2], [4, 5]];
let flattened3 = arrays3.reduce((acc, curr) => {
    return acc.concat(curr);
}, []);
console.log(flattened3);


/* note: I recieved this answer from Jose sharing his screen and in class
discussion on September 25, 2025 */


// WRITE YOUR OWN LOOP

/*
Write a higher-order function loop that provides something like a for 
loop statement. It should take a value, a test function, an update 
function, and a body function. Each iteration, it should first run the 
test function on the current loop value and stop if that returns false. 
It should then call the body function, giving it the current value, and
finally call the update function to create a new value and start over 
from the beginning.

When defining the function, you can use a regular loop to do the actual
looping.?
*/

function loop(value, test, update, body) {
    while (test(value)) {
        body(value);
        value = update(value);
    }
}

/* using the test from the book*/

loop(3, n => n > 0, n => n - 1, console.log);

/* note: I also received majority of this code from Jose's in class screen
share on 9/25/2025. */

// Everything

/*
Arrays also have an every method analogous to the some method. This 
method returns true when the given function returns true for every 
element in the array. In a way, some is a version of the || operator 
that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate 
function as parameters. Write two versions, one using a loop and one 
using the some method.

Hints:
Like the && operator, the every method can stop evaluating further 
elements as soon as it has found one that doesn’t match. So the 
loop-based version can jump out of the loop—with break or return—as 
soon as it runs into an element for which the predicate function returns 
false. If the loop runs to its end without finding such an element, we 
know that all elements matched and we should return true.

To build every on top of some, we can apply De Morgan’s laws, which 
state that a && b equals !(!a || !b). This can be generalized to arrays, 
where all elements in the array match if there is no element in the 
array that does not match.
*/

function every(array, test) {
    for (let element of array) {
        if (!test(element)) {
            return false;
        }
    }
    return true;
}

/* testing the book examples*/

console.log(every([1, 3, 5], n => n < 10));

console.log(every([2, 4, 16], n => n < 10));

console.log(every([], n => n < 10));

/* notes:
I used the for loop to loop through every element in the array so that
when the given function returns true when every method also returns true.
I did this after reading through the book. The book also states to implement
every as a function to take an array and function to make 2 parameters,
an array and a test function. I used return false so the loop can
have something to return and stop as soon as the function returns false instead
of trying to continue or work through a false that wouldn't match the code.
This is like the && given in the example in making it stop early when failure is
reached. Finally, I used return true so that true would be returned if every element
passed the test in the code.
*/