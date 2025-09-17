// Alex Kincer

// The Sum of A Range

/*
The introduction of this book alluded to the following as a nice way to
compute the sum of a range of numbers:

console.log(sum(range(1, 10)));

Write a range function that takes two arguments, start and end, and returns
an array containing all the numbers from start up to and including end.

Next, write a sum function that takes an array of numbers and returns the
sum of these numbers. Run the example program and see whether it does indeed
return 55.

As a bonus assignment, modify your range function to take an optional third
argument that indicates the "step" value used when building the array. If no
step is given, the elements should go up by increments of one, corresponding
to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5,
7, 9]. Make sure this also works with negative step values so that range (5, 2,
-1) produces [5, 4, 3, 2].
*/

function range(start, end, step) {
    let result = [];

    if (step == undefined) {
        if (start < end) {
            step = 1;
        } else {
            step = -1;
        }
    }
    
    if (step > 0) {
        for (let i = start; i <= end; i += step)
            result.push(i);
    } else {
        for (let i = start; i >= end; i += step)
            result.push(i);
    }
    return result;
}

function sum(array) {
    let total = 0;
    for (let value of array) total += value;
    return total;
}

/* Now to try with the examples given */

console.log(range(1,10));
console.log(range(5, 2, -1));
console.log(sum(range(1,10)));

/* 
When going through this problem, my first concern was whether or not I should attempt to keep the sum and
range functions in one chunk of code or if i should seperate them. After asking ChatGPT and studying/breaking
down the conversation, I decided to seperate them. I do feel like it was quite a bit to keep up with and type
but I feel like it was the better choice for me. Here is that conversation -> https://chatgpt.com/share/68ca1668-4f90-8002-bd5f-bad1e66260e2

Next, I was trying to get a better understanding of what was and wasn't needed since my code was so long.
So, I moved onto using step being set to -1 and if that is really necessary. I quickly learned in this 
ChatGPT conversation linked that the step was how much the value increased or decreased during the code. 
Since the default is +1, step being set to -1 for the start > end just makes sense to making the code 
output a decreasing range of numbers. Here is the conversations -> https://chatgpt.com/share/68ca1779-8868-8002-ac4b-e0f65051a172
Because of this conversation, I also got a better understanding of using >= to count downward and <= to count
upward to express the start being greater than the end and the start being less than the end.

I definitely think I overcomplicated this solution, but it does work.
*/

// Reversing an Array

/*
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For
this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, should take
an array as its argument and produce a new array that has the same elements in the inverse order. The second,
reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by
reversing its elements. Neither may use the standard reverse method.
Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do
you expect to be useful in more situations? Which one runs faster?
*/

function reverseArray(array) {
    let newArray = [];
    for (let i = array.length - 1; i >= 0; i --)
        newArray.push(array[i]);
    return newArray;
}

/* Trying it out - note: exited code in 0.187sec */

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));

console.log(myArray);

/* Now ReverseArrayInPlace */

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i ++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

/* Trying it out - note: exited code in 0.17sec */

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

/* I expect the variant reverseArray to be useful in more situations because, according to the chapter, it is a pure 
function and does not modify the array that is gicen to it. In the reverseArrayInPlace, it is faster because it doesn't
have to assign a new array, only modify the one it is given. I concluded both of these answers using the chapter. */