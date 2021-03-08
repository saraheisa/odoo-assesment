const charsArray = () => {
    const chars = [];
    for (let charCode = 65; charCode <= 90; charCode++) {
        chars.push(String.fromCharCode(charCode));
    }
    return chars;
}

console.log(charsArray());
