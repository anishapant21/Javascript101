//Write a JavaScript program to find the largest of three given integers

const integers=[23, 45, 22, 53, 100, 2235, 2938203, 2, 1];
integers.sort((a, b) => a-b);
last=integers.length;
console.log("The greatest is:", integers[last-1]);


//Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.

a=108;
b=101;

if( Math.abs(100- a) < Math.abs(100-b)){
    console.log(a, "is near");
} else{
    console.log(b, "is near");
}



//Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive

const number=[43, 75, 65];

number.forEach(elem => {
    if (elem >40 && elem <= 60){
        console.log("I am inside the 40-60 range");
    } else if (elem>70 && elem <= 100) {
        console.log("I am inside 70 -100 range");
    } else {
        console.log("oops out of any range");
    }
    
});

//Write a program to check whether a specified character exists within the 2nd to 4th position in a given string.
const legen='iexist';
console.log(legen[2]);

if (legen[1] === 'i' || legen[2] === 'i' || legen[3] === 'i'){
    console.log("I exist")
} else{
    console.log("I don't")
}
//terrible way to do this!!! I know right!!