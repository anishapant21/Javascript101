function multiply(){
    num1= document.getElementById('numOne').value;
    num2= document.getElementById('numTwo').value;
    multiply=num1*num2;
    document.getElementById('resultMul').outerHTML=multiply;

}

function divide(){
    num1= document.getElementById('numOne').value;
    num2= document.getElementById('numTwo').value;
    divide=num1/num2;
    document.getElementById('resultDiv').outerHTML=divide;

}

