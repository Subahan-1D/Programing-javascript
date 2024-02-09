// create a funtion that will return only the even numbers 
// return the sum of even number 

// function evenNumberOnly(numbers){
//     const evens = [];
//     for(let number of numbers){
//        if(number%2===0){
//         console.log(number);
//         evens.push(number);
        
//        }
//     }
//     return evens;

// }
// const numbers = [ 1,2,3,4,5,56,7]
// const evens =evenNumberOnly(numbers);
// console.log(evens)

function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 1){
            console.log(number)
            sum = sum + number;
        }
    }
    return sum;

}
const numbers = [ 1,2,3,4,5,56,7]
const sum =sumOfNumbers(numbers);
console.log(" The sum is number ;",sum)
