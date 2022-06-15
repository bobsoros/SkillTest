const reverseWord = (str) => {
    let arr = str.split(' ');
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let reverseWord = arr[i].split('').reverse().join('');
        reverseWord = reverseWord.toLowerCase();
        reverseWord = reverseWord.charAt(0).toUpperCase() + reverseWord.slice(1)
        newArr.push(reverseWord);
    }
    return newArr.join(' ');
};

console.log(reverseWord("I am A Great human"));