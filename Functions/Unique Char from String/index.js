function unique(str){
    newStr=[];
    for (i=0 ; i<str.length ; i++){
        if (newStr.includes(str[i])){
            newStr.push['']

        } else{
            newStr.push(str[i])
        }

    }
    console.log(newStr.join(''));

}

unique("thequickbrownfoxjumpsoverthelazydog")