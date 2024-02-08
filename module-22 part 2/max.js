


//console.log(Math.max(12,34,34,254,2343,2,465,543,3344,35342));

// 
const heights = [ 12,34,34,254,2343,2,465,543,3344,35342,]
let maxs = [0]
function getmax(numbers){
    for (let num of numbers){
        if( num > maxs ){
            maxs = num ;
        }
    }
    return maxs;
    
}
const max = getmax(heights);
console.log("The max number is : ",max)