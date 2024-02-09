// function calculateMoney(ticketSale) {
//     if (typeof ticketSale !== 'number' || ticketSale < 0) {
//         return "Invalid Number";
//     }

//     const incomeMoney = ticketSale * 120;
//     const expensesMoney = 500 + (8 * 50);
//     const remainingMoney = income - expenses;
//     return remainingMoney;
// }


// function checkName(name) {
//     if (typeof name !== 'string' || !/^[a-zA-Z]+$/.test(name)) {
//         return "invalid";
//     }

//     const lowerCaseName = name.toLowerCase();

//     const endsWith = lowerCaseName.charAt(lowerCaseName.length - 1);
//     if (endsWith === 'a' || endsWith === 'y' || endsWith === 'i' || endsWith === 'e' || endsWith === 'o' || endsWith === 'u' || endsWith === 'w') {
//         return "Bad Name";
//     }

//     return "Good Name";
// }



// function deleteInvalids(array) {
//     if (!Array.isArray(array)) {
//         return "Invalid Array";
//     }

//     const result = array.filter(item => typeof item === 'number' && !isNaN(item));

//     return result;
// }

/*
function monthlySavings(arr , livingCost) {
  // Check if the input is valid
  if (!Array.isArray(arr) || typeof livingCost !== 'number') {
      return 'invalid input';
  }

  let totalEarn = 0;
  let totalSaving = 0;

  for(const number of arr){
     if(number>=3000){
          const taxx = number * 0.20;
          const withTax = number - taxx;
          arr[arr.indexOf(number)] = withTax;
     }
  }

  for( const newNumber of arr){
      totalEarn += newNumber;
  }

  totalSaving = totalEarn - livingCost;
  if(totalSaving < 0){
      return 'earn more';
  } else {
      return totalSaving;
  }
}
*/

// function password(obj) {
//     if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName') || isNaN(obj.birthYear) || obj.birthYear.toString().length !== 4) {
//         return "invalid";
//     }

//     const websiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
//     const password = ${websiteName}#${obj.name}@${obj.birthYear};
//     return password;
// }


  function password(object){
    
    const isValid = name && birthYear && siteName && birthYear.toString().length === 4;
    if (!isValid){
        return "invalid"
    }
    else{

        const websiteName = object.siteName.charAt(0).toUpperCase() + object.siteName.slice(1);
        const password =`${siteName}#${name}@${birthYear}`
        return password ;
    }
  }
//   const input = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
//   console.log(password(input))


//   function password(obj) {
//     if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName') || isNaN(obj.birthYear) || obj.birthYear.toString().length !== 4) {
//         return "invalid";
//     }

//     const websiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
//     const password = ${websiteName}#${obj.name}@${obj.birthYear};

//     return password;
// }
// const input = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
//   console.log(password(input))

  function password(obj) {
    if (!obj.hasOwnProperty('name') || !obj.hasOwnProperty('birthYear') || !obj.hasOwnProperty('siteName') || isNaN(obj.birthYear) || obj.birthYear.toString().length !== 4) {
        return "invalid";
    }

    const websiteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
    const password = `${websiteName}#${obj.name}@${obj.birthYear}`;

    return password;
}
const input = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
console.log(password(input));



