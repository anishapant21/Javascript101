//Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.

function isItPrime(num){
    if(num === 1){
        return true;
    } else if (num===2){
        return false;
    } else {
        for(i=2; i<=num; i++){
            if(num === i){
                return;
            } else if(num % i ===0) {
                return false;

            } else{
                return true;;
            }
        }

    }
}


console.log(isItPrime(256));
console.log(isItPrime(1));
console.log(isItPrime(2));
console.log(isItPrime(37));
