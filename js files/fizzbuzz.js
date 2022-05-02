var num_collection = [];
var number = 1;

function fizzBuzz() {
    while (number <= 100) {
        if (number % 3 === 0 && number % 5 === 0) {
            num_collection.push("fizzbuzz");
        } else if (number % 3 === 0) {
            num_collection.push("fizz");
        } else if (number % 5 === 0) {
            num_collection.push("buzz");
        } else {
            num_collection.push(number);
        }
         number++;
    }
    console.log(num_collection);
}