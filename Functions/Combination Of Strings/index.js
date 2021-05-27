function findCombination(str){
    newStr=str.toLowerCase();
    console.log(newStr);
    listMe = [];
    for ( i=0 ; i<=str.length ; i++){
        for ( j=i+1 ; j<=str.length ; j++ ){
            listMe.push(newStr.substring(i, j))
            
        }
    }
    console.log(listMe);
 }

findCombination("Dog")


//MILENAAAAAAAAA
//THINK BABY THINK