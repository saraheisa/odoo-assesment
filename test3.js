const sumOfIntegers = (list) => {
    return list.reduce((sum, listItem) => {
        // checking first if a number using isNan (Nan for not a number)
        // isNan returns false for numbers even if it was of type string!!
        // if true then just return the sum as it is
        if (isNaN(listItem)) return sum;
        // if it's a number add it to sum and return the result
        // using '+' before the item to convert to integer (it also trims trailing spaces) 
        return sum += (+listItem);
    }, 0)
}

console.log(sumOfIntegers(['53', 'hjj', '    ', '  4 7 ']));
