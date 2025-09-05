// Alex Kincer

// Looping a Triangle

/*
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/


let triangle = "";

for (let triangle = "#";
    triangle.length <= 7;
    triangle += "#") {
  console.log(triangle);
}


// FizzBuzz


/*
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5
(and not 3), print "Buzz" instead. 

When you have that working, modifying your program to print "FizzBuzz"
for numbers that are divisible by both 3 and 5 (and still print "Fizz"
or "Buzz" for numbers divisible by only one of those).
*/


for (let n = 1; n <= 100; n++) {
  if (n % 3 == 0 && n % 5 == 0) {
    console.log("FizzBuzz");
  } else if (n % 3 == 0) {
    console.log("Fizz");
  } else if (n % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(n);
  }
}



// Chessboard

/*
Write a program that creates a string that represents an 8x8 grid,
using newline characters to seperate lines. At each position of the grid
there is either a space or a "#" character. The character should form a
chessboard.

Passing this string to console.log should show something like this:

# # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding
size = 8 and change the program so that it works for any size, outputting
a grid of the given width and height.
*/


let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 ===0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n"
}
console.log(board)

/* notes:
using the let size = 8 and let board = "" binding idea from the chapter.
using if else statements to control what I am outputting.
finally, using (x + y) % 2 === 0 to hopefully produce T/F.
also using the console.log due to all the times we used it after our
codes in class, not sure if it is completely neccesary.
*/