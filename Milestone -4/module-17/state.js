/**
 * MULTI-LEVEL CONDITION
 */


// if (price >=  1000){
    //     // 10% discount
    //     const discount = price *10 / 100;
    //     console.log(discount);
    // }
const price = 2000;
if (price >=3000){
    //20 % discount
    const offer = price * 20 /100;
    const payAmount = price - offer;
   console.log(payAmount);
}
// else if (price >= 300) {
//     //3% discount
//     const offer = price *3/100;
//     const payAmount = price - offer;
//     console.log(payAmount);

// }
else if (price > 200 ){
    //2% discount
    const offer = price *2/100;
    const payAmount = price - offer;
    console.log(payAmount );
}
else{
    console.log(price)
}
