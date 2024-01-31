// Reverse an array
// const array = ['apple' , 'bannana', 'orange','malta','narikal']
// for (let i = array.length -1 ; i >= 0 ; i--){
//     console.log(array[i]);
// }


// Reverse an array 
/**
 * const fruit = ['apple', 'comola', 'mango', 'orange', 'fruits']
for (let i = fruit.length - 1; i >= 0; i--) {
    console.log(fruit[i]);
}
 */

// array Element 
/** */
// const  nums = [10,20,30,40,50]
// let sum = 0 ;
// for(let i = 0 ; i < nums.length ; i++){
//     const currentNumber = nums [i];
//     sum = sum+ currentNumber;
// }
// console.log(sum);

// sum of array Element 
/** 
 const num = [10,20,30,40,50]
let sum = 0;
for(let i = 0 ; i < num.length ; i++){
    const currentNumber = num[i];
    sum = sum+ currentNumber ;

}
console.log(" The sum result : ",sum);
*/

// swap arry element 
// const nums2 = [10, 20, 30, 40, 50]

// let temp = nums2[3];
// nums2[3] = nums2[1];
//  nums2[1]=temp
//  console.log(nums2);

/*** 
 const nums3 = [ 20 ,40,60,80,100]

 let temp = nums3[4]
 nums3[4] = nums3[0]
 nums3[0]=temp

 console.log(nums3);
*/

// Find array elements
/** 
const fruit = ['apple ', 'mango',  'orange','banana' ,'dove']

const target = "badana"
let foundIndex = -1;

for (let i = 0 ; i < fruit.length ; i++){
    const currentFruits = fruit[i]
    if (currentFruits == target){
        foundIndex = i;
    }
}
if (foundIndex > -1){
    console.log(foundIndex,'Founded')
}
else{
    console.log("NOT FOUNDED")
}
*/

//Find max / min number 

const num1 = [65,45,35,21,56,3,54,1]

let maxNum = [0];
let minNum = [0];

for ( let i = 0 ; i < num1.length ; i++){
    const currentNumber = num1[i];

    if( maxNum < currentNumber){
        maxNum = currentNumber;
    }
    if (minNum > currentNumber){
        minNum =currentNumber;
    }
}
console.log(minNum , maxNum);