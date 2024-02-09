
const subahan = 58 ;
const juwel = 60 ;

if (subahan > juwel){
    console.log('subahan A -')
}
else {
    console.log(' juwel  A + ')
}

// inside a function 

function getMax(num1 , num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2 ;
    }
}
const sum = getMax(55,67);
console.log(sum)
