function convertCoins(a, b){
    coins=[]
    for (i=0; i<b.length; i++){
        rem= Math.floor(a / b[i]);
        for (j=0; j<rem; j++){
            coins.push(b[i])
            a-=b[i];
         }     

    }
    console.log(coins);

}

convertCoins(120, [25, 10, 5, 2, 1]);