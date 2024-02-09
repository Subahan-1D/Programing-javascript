// calculating discount

// const discuntedPrice = []


// for (let i = 0 ; i < punchesHistory.le)


// Serial Change 


const serial = [22, 33, 44, 55, 66, 77, 88]

const target = 55;
while (true) {
    const fristElemetn = serial[0];

    if (fristElemetn == target) {
        break;
    }

    const extractedElement = serial.shift();
    serial.push(extractedElement);
}
console.log(serial);