//Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

const string = "iamevan";
console.log("The word is", string);
here = string.split('');
newHere=[];
for (i =0; i< here.length -1  ; i++){
    newHere.push(here[i+1]);
}
newHere.push(here[0]);
changed =  newHere.join('');
console.log("when changed", changed);


//Write a JavaScript program to capitalize the first letter of each word of a given string.
const sentence="i love javascript"
console.log("Raw:", sentence);
hereOkay= sentence.split('');
newHereOkay=[];
for (j=0; j< hereOkay.length; j++){
    if (j == 0){
        newHereOkay.push(hereOkay[0].toUpperCase());
    } else {
        if(hereOkay[j-1] === ' '){
            newHereOkay.push(hereOkay[j].toUpperCase());
        } else {
            newHereOkay.push(hereOkay[j])
        }

    }
    
}
console.log("Capitalized:", newHereOkay.join(''));