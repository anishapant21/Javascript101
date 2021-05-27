function countTheVowel(str){
    newStr=str.toString().split('');
    console.log(newStr[0])
    console.log(newStr.length)
    count=0;
    arrVowel=['a', 'e', 'i', 'o', 'u'];
    for(i=0; i<newStr.length; i++){
        if (arrVowel.includes(newStr[i])){
            count+=1;
        }
    }
    console.log(count);
    
}

countTheVowel("who cares do you")
