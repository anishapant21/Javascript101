//Write a JavaScript function which says whether a number is perfect

function amIPerfect(num){
    arry=[ ];
    for (i=0; i<=num; i++){
        if (num % i === 0){
            arry.push(i);   
        }
    }
    sum=0;
    for( j=0; j<arry.length; j++){
        sum+=arry[j];

    }
    if ( sum/2 === num){
        console.log("I am perfect")
    } else {
        console.log("I am not perfect")
    }
}

amIPerfect(6);
amIPerfect(10);
amIPerfect(496);

