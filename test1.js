/**
 * 
 * @param {number to check if it's a multiple} number 
 * @param {number to check multiplication of} base 
 */
function checkMultiple(number, base) {
    return number % base === 0;
}

let num;
const MAX_NUMBER = 100;

for (num = 1; num < MAX_NUMBER; num++) {
    if (checkMultiple(num, 3) && checkMultiple(num, 7)) {
        console.log('OpenSource');
    } else if (checkMultiple(num, 3)){
        console.log('Open');
    } else if (checkMultiple(num, 7)){
        console.log('Source');
    } else {
        console.log(`${num}`);
    }
}
