// Write a JavaScript program to check the total marks of a student in various examinations. 
// The student will get A+ grade if the total marks are in the range 89..100 inclusive, 
// if the examination is "Final-exam." the student will get A+ grade and
// total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise

function myResult(){
    const mathMarks = document.getElementById("maths").value;
    const physicsMarks = document.getElementById("physics").value;
    const chemMarks = document.getElementById("chem").value;
    const engMarks = document.getElementById("eng").value;
    const comMarks = document.getElementById("com").value;
    
    total =  Number(mathMarks) + Number(physicsMarks) + Number(chemMarks) +Number(engMarks) + Number(comMarks);
    average = total/5;
    console.log(average);
    if (average > 90){
        result="Congatualtions you got A+ Grade";
    } else if (average > 60 && total < 90){
        result=" You got B+";
    } else if (average >50 && total <60){
        result =" You got B. Better uluck next time.";
    } else{
        result="Sorry you failed";
    }

    document.getElementById("res").outerHTML = result;
}