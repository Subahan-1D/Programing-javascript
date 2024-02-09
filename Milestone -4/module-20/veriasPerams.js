/**
 * for a given string tell me wether it has even numbers of characters or not 
 */
/*
function evenSized(str){
    const size =str.length;
    console.log(str,size);
    if(size % 2 === 0){
        console.log('even size')
    }else{
        console.log('odd size')
    }
}
evenSized('Thakurgaon');
evenSized('Dhaka')
evenSized('Bangladesh')
evenSized('subahan')
evenSized('rasel')
evenSized('sultan')
*/

function doDoubleOrTriple(number,doDouble){
    if(doDouble===true){
        const result = number*2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}
// console.log(doDoubleOrTriple(5,true));
// console.log(doDoubleOrTriple(5,false));

function elementOfNumbers(num){
    const len = elementOfNumbers.length;
    return len;

}
elementOfNumbers([12,32,32,2,12,3,3]);
