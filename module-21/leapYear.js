// Year will be a leap year is disible by 4
// simple logic 100% true na 
function leapYear(year){
    if ( year % 4 === 0){
        return true;
    }else{
        return false ;
    }
}
const lipi=leapYear(2068);
console.log(lipi);

//