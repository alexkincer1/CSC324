// Alex Kincer

// Flattening

/*
Use the reduce method in combination with the concat method to "flatten" an
array of arrays into a single array that has all the elements of the 
original arrays.
*/ 

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