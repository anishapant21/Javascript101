const ranNum= parseInt(Math.random()*10);
console.log(ranNum);

const guessNum= prompt("Guess a number between 1 to 10")

if (ranNum == guessNum){
    alert("Yayy you guessed it correct!!!")
}
else{
    alert("Better luck next time!!!")
}