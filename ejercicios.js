// Exercise #1
// Open up a blank repl.it set to Javascript. Copy the code below into your workspace:

var arr = ["This", "is", "a", "sentence."];

function printOutString() {
    var result = '';

    for(var i = 0; i < arr.length; i++){
        result += arr[i] + ' ';
    }

    console.log(result);
}

printOutString();


// Exercise #2
// Write a function that:

// Takes in an array of numbers.
// Doubles the value of each number in the array.
// Prints out the new updated array.
// Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]

function doubleArray() {
    var firstArray = [1, 2, 3, 4, 5];  // [2,4,6,8,10]

    for (var i = 0; i < firstArray.length; i++){
        firstArray [i] = firstArray[i] * 2;
    }
    console.log(firstArray);
}

doubleArray();


// Exercise #3
// Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.

// Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.


function sumProduct(){
    var array = [4, 5, 6 ,7, 8];
    var sum = 0;
    var product = 0;

    for(var i = 0; i < array.length; i++){
        sum += array[i];
        product *= array[i];
    }

    console.log(sum + ' ' + product);
}

sumProduct();
