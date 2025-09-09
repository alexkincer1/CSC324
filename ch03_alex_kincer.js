// Alex Kincer

// Minimum

/*
The previous chapter introduced the standard function Math.min that returns its
smallest argument. We can write a function like that outselves now.
Define the function min that takes two arguments and returns their minimum.
*/

function min(a, b) {
    if (a < b) return a;
    else return b;
}

/* Now to check my work using the two arguments given in the problem listed*/

console.log(min(0, 10));

console.log(min(0, -10))

// Recursion

/*
We've seen that we can use % to test whether a number is even or odd by using
% 2 to see whether it's divisble by two. Here's another way to define whether
a positive whole number is even or odd:
    - Zero is even.
    - One is odd.
    - For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this descriptions. The 
function should accept a single parameter (a positive, whole number) and
return a Boolean.
*/

function isEven(n) {
    if (n < 0) n = -n;

    if (n === 0) {
        return true;
    } else if (n === 1) {
        return false;
    } else {
        return isEven(n - 2);
    }
}

/* testing it on 50 and 75: */

console.log(isEven(50));

console.log(isEven(75));

console.log(isEven(-1));

/* I was a little confused about the hint regarding negative numbers being used
in this isEven statement, so I asked ChatGPT to explain a way in which would disect
the hint and show me how JavaScript is intending me to go about the -1 or other numbers
being used in this exercise. This chat showed me the "simple fix" where I should place 
my disclaimer for negative numbers that I use in my function to be normalized first, hence
line 37 in my code. Here is my conversation: https://chatgpt.com/share/68c08f14-d7c0-8002-aca8-1545d67a7016
*/

// Bean Counting

/*
You can get the Nth character, or letter, from a string by writing [N] after the string
(for example, string[2]). The resulting value will be a string containing only one character 
(for example, "b"). The first character has position 0, which causes the last one to be
found at position string.length - 1. In other words, a two-character string has length
2, and its characters have positions 0 and 1. 

Write a function called countBs that takes a string as its only argument and returns a
number that indicates how many uppercase B characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a 
second argument that indicates the character that is to be counted (rather than counting
only uppercase B characters). Rewrite countBs to make use of this new function.
*/


const countChar = function(string, ch) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === ch) {
            count += 1;
        }
    }
    return count;
};

const countBs = function(string) {
    return countChar(string, "B");
};

/* note: To my understanding, using countBs call to countChar will avoid the repition. 
Now, to test it on the two examples listed in the book:
*/

console.log(countBs("BOB"));

console.log(countChar("kakkerlak", "k"));