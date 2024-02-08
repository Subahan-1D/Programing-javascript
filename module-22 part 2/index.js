// Assaingment 04  Date Line : 11:59 mane 11 : 59 ..bujla subahan vai ;


function calculateMoney(ticketSale) {
    if (ticketSale <= 0) {
        return "invalid Number"
    }
    else {
        const perDayIncome = ticketSale * 120;
        const dailyCost = (50 * 8) + 500;
        const totalCost = ticketSale * dailyCost;
        const remainingMoney = perDayIncome - totalCost;
        return remainingMoney;
    }
}

function checkName(name) {
    if (typeof name !== 'string' || !/^[A-Z a-z]+$/.test(name)) {
        return "invalid Name";
    }
    const lowerCaseName = name.toLowerCase();
    const lastCharacter = lowerCaseName.charAt(lowerCaseName.length - 1);
    if (lastCharacter === 'a' || lastCharacter === 'e' || lastCharacter === 'i' || lastCharacter === 'o' || lastCharacter === 'u' || lastCharacter === 'w' || lastCharacter === 'y') {
        return "Good Name"
    }
    else {

        return "Bad Name"
    }
}

function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "Invalid Array";
    }
    const result = array.filter(element => typeof element === "number" && !isNaN(element));
    return result;
}


function password(object) {
    if (!object.ownProperty('name') || !object.ownProperty('birthYear') || !object.ownProperty('siteName') || isNaN(object.birthYear) || object.birthYear.toString().length !== 4) {
        return "invalid";
    }

    const websiteName = object.siteName.charAt(0).toUpperCase() + object.siteName.slice(1);
    const password = `${websiteName}#${object.name}@${object.birthYear}`;

    return password;
}
const input = { name: "kolimuddin", birthYear: 1999, siteName: "google" };
console.log(password(input));


function monthlySavings(array, livingCost) {
    if (!Array.isArray(array) || typeof livingCost !== 'number') {
        return 'input invalid';
    }
    let totalEarning = 0;
    let totalSaving = 0;
    for (const number of array) {
        if (number >= 3000) {
            const tax = number * 0.20;
            const withTax = number - tax;
            array[array.indexOf(number)] = withTax;
        }
    }
    for (const newNumber of array) {
        totalEarning += newNumber;
    }
    totalSaving = totalEarning - livingCost;
    if (totalSaving < 0) {
        return 'earn more';
    } else {
        return totalSaving;
    }
}


