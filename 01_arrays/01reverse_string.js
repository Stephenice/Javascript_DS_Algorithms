/**
 * 1. convert string to array with .split()
 * 2. reverse the array with .reverse()
 * 3. convert array back to string with.join()
 * 
 * /
 * */
function reverseString(s) {
let len = s.split('').reverse().join('')

console.log(len)
return len;
}

reverseString('hello, What is your name?');