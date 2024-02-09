// array songkhar jog  function
function sumOfNumbers(numbers){
    let sum = 0 ;
  for ( const number of numbers){
    console.log(number);
    sum = sum + number;
   
  }
  return sum ;

}
const numbs = [ 12,34,2,32,45,3]
const nums = sumOfNumbers(numbs);
console.log(nums)
console.log('The sum is :',nums)
