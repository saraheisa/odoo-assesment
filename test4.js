const sumOfIntegers = (list) => {
    // the stop condition is empty list
    if (list.length === 0) return 0;
    // using splice to truncate the first item [0] in the list
    return isNaN(list[0])? sumOfIntegers(list.splice(1)) 
                                   : (+list[0]) + sumOfIntegers(list.splice(1));
}

console.log(sumOfIntegers(['444', '478', '4', '447']));
