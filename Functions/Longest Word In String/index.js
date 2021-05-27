function findLongestWord(str){
    newB= str.toString().split(' ');
    console.log(newB)
    bLength=0;
    word='';
    for(i=0; i<newB.length; i++){
        if (newB[i].length > bLength){
            bLength= newB[i].length;
            word= newB[i];
        }
        
    }
    console.log("The longest length is", bLength, "and the word is:", word)

}

findLongestWord("Who cares do you")