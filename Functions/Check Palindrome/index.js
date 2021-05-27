//Write a JavaScript function that checks whether a passed string is palindrome or not?
const checkPalindrome = theWord => { theWord.toString().split('').reverse().join('') === theWord? console.log("TRUE") : console.log("False")}

checkPalindrome("FOOF");
checkPalindrome("hyaaa");
checkPalindrome("CRAARC");
checkPalindrome("sore was i ere i saw eros");