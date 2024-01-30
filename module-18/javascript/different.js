

// give me the list number between 1 to 30 divisible  by 5 

// for (let i = 5 ; i < 30 ; i++){
//     if(i % 5 ===0){
//         console.log(i)
//     }
  
// }

// for ( let i = 5 ; i < 30 ; i++){
//     if (i % 3 === 0 || i % 4 ===0 ){
//         console.log(i)
//     }

// }

// for ( let i = 5 ; i < 30 ; i++){
//     if (i % 3 === 0 && i % 4 ===0 ){
//         console.log(i)
//     }

// }

// give me the sum of numbers from 1 to 20 that are divisible by 3
let n = 0 ;
for (let i = 1 ; i < 20 ; i++){
    if ( i % 3 === 0){
        n = n + i ;
        console.log(i);
    }
   
    
}
console.log("The sum result is : ",n)