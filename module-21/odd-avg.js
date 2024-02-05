
//
/*
function oddAvg(numbers){
console.log(numbers)
}
const numbers = [ 12,34,5,63,3,56,3,2,54]
const odd = oddAvg(numbers)
console.log("The Avarage number is :",odd)

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
     console.log(i);
  }, 100);
} */

//  odd --> bijor songkha output

/*
function oddAvg(numbers){
    const odd = [];
    for(const num of numbers){
        if(num % 2 === 1){
            odd.push(num)
        }
    }
    let sum = 0;
    for(const num of odd){
        sum = sum + num;
    }
    const count = odd.length;
    console.log(sum , count);
    const avg = sum / count;
    return avg;
    //console.log(odd)
}

const numbers=[1,3,2,4,5,7,8,9,3]
const avg = oddAvg(numbers);
console.log("avarage is the odd numbers :",avg);
*/

// even ---> jor sonkha jog

function evenAvg(numbers){
    const even = [];
    for(const number of numbers){
        if(number % 2 === 0){
           even.push(number)
        }
    }
    let sum = 0 ;
    for(const number of even){
        sum = sum + number ;
    }
    const count = even.length;
    console.log( sum , count)
    const avg = sum / count;
    return avg ;

}
const numbers = [1,2,3,4,5,6,7,8,9,11,12]
const avg = evenAvg(numbers);
console.log("Avarage of Even numbers :",avg)