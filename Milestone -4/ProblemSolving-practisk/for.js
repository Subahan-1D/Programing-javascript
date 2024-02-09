

// for(let i = 1; i <= 10 ; i++){
//     console.log('subahan',[i])
// }
/*
const nums = [ 23,25,27,29,31]
for(let i = 0 ; i < nums.length;i++ ){
    console.log(nums[i])
}
*/

//

const nums =[26,27,28,29,30,31,32]
let sumOfOdd=0;
let sumOfEven=0;
for(let i = 0 ; i < nums.length; i++){
    const x = nums[i];
    if (x % 2 === 1){
        sumOfOdd += x ;
    }else{
        sumOfEven += x ;
    }
}
console.log(sumOfEven);
console.log(sumOfOdd);
