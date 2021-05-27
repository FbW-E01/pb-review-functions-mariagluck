
// 1. Write a normal function that takes in two numbers and *returns* the sum of those numbers.

function sum(num1,num2) {
    return num1 + num2;
}
console.log(sum(5, 9));

// 2. Write a normal function that takes in a string and *returns* that string capitalized.

function capitalize(string) {
    const words = string.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    
    return words.join(" ");
}
console.log(capitalize("hello darling, new day and new life"));



// 3. Write a normal function that takes in an array and *returns* the last item in that array.

function lastItemArray(array) {
    return array[array.length - 1]
}

arrayExample = ["banana", 34, 78, 56];
console.log(lastItemArray(arrayExample)); //56

// 4. Write an arrow function that takes in an array and *returns* the first item in that array.

const firstArrayItem = array => array[0];

console.log(firstArrayItem(arrayExample));// banana

// 5. Write an arrow function that takes in a string and *returns* the last three characters of that string.

const lastThreeLetters = string => string.slice(string.length - 3); 

const myString = " sunglasses at night";
console.log(lastThreeLetters(myString)); // ght


// 6. Write an arrow function that takes in an array and *returns* the type of the first item in that array.

const firstItemType = array => typeof array[0];

console.log(firstItemType(arrayExample)); //string


// 7. Write an arrow function that takes in an array and *returns* true, if all items in that array have the same type.

const sameType = array => {
    return array.filter(i => typeof i === typeof i++).length === array.length;
  }

  console.log(sameType(arrayExample)); //false

  const arrayExample2 = [1, 2, 3 , 4, 5];
  console.log(sameType(arrayExample2)); // true


// 8. Print the `type` of a variable that has a normal function value.

const summ = sum(); //saving the normal function sum() from above into a variable 
console.log(typeof summ); //it prints number


console.log(typeof lastItemArray); //function




// 9. Print the `type` of a variable that has an arrow function value.
console.log(firstItemType); // [Function: firstItemType]
console.log(sameType); //[Function: sameType]

// 10. Write and test a function that takes in two parameters (min and max). That function should return another function that doesn't take in any parameters, but returns a random number between min and max. Effectively your "outer" function is a factory that creates customized random number generator functions.
 
const createRandomNumber = (min, max) =>  {
    function number() {
       return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return number();
}
console.log(createRandomNumber(5, 86))

// 11. In your own words, explain what are side effects and what is a pure function.

//Side effects are changes or modifications that take place while calling a function and that happen OUTSIDE the function scope itself.
//Pure function is a function that doesn't have side effects, so it doesn't impact or modify anything outside its own scope.

// 12. In your own words, explain what is the difference between functions and methods.

//Functions are a sort of set of instructions on data or variables that return a  result. A method, is somehow like a function, is also a set of instructions that perform a task but a method is associated with an object, while a function is not. 
// A JavaScript method is a property of an object that contains a function definition or in other words "methods" are functions stored as object properties.

