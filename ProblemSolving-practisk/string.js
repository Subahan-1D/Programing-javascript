
// string compare , lowercase , uppercase , trim
/*
const x = "Rasel";
const y = "RaSeL";

if (x.toLowerCase() === y.toLowerCase()){
    console.log('both are same')
}
else{
    console.log('both are not same')
}
*/
// if (x === y){
//     console.log('both are same')
// }else{
//     console.log('both are not same')
// }

// includes
/*
const x = "Hello word";
const y = "hello word"

//console.log(x.includes(y))

console.log(x.toLowerCase().includes(y.toLowerCase()));
*/


// trim er bebohar 

const sentence = "Amar sonaR Bangla"
const word = "Amar Sonar Bangla "

if(sentence.trim().toLowerCase()===word.trim().toLowerCase()){
    console.log("bort are same")
}else{
    console.log("both are not same")
}
