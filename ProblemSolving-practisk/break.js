// break
/*
const nums = [1,2,3,4,5,6,7,]

for (let i of nums){
    console.log(i)
    if( i ===5 ){
        break;
    }
}
*/
// continue
const nums = [1,2,3,4,5,6,7,]

for(let item of nums){ 
    if(item % 2 === 0){
        continue;
    }
    console.log(item)
}
