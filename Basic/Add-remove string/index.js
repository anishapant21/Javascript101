//Write a JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

let stew = "thon";

if (stew.charAt(0)==='p' & stew.charAt(1)==='y'){
    stew = stew.substring(1);
    stew = stew.substring(1);
    console.log(stew)
} else {
    stew= 'py' + stew;
    console.log(stew);
}

//Write a JavaScript program to remove a character at the specified position of a given string and return the new string.

let stewAgain= "Hey babe";
stewAgain1= stewAgain.substring(0, 3);
stewAgain2=stewAgain.substring(4, 8);
console.log(stewAgain1+stewAgain2);


//Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1

let stew3= 'whocaresdoyou';
if (stew3.length >=1){
    s1= stew3.charAt(0);
    s2=stew3.charAt(stew3.length-1);
    console.log(s1)
    console.log(s2)
    newstew= s2 + stew3.substring(1, stew3.length-1) + s1;
    console.log(newstew);

}
