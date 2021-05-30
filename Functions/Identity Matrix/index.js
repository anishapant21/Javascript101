//Write a JavaScript function which returns the n rows by n columns identity matrix

const rowcolumn=5;

for (i=0; i<rowcolumn; i++){
    for (j=0; j<rowcolumn; j++){
        if (i===j){
            console.log("1")
        } else{
            console.log("0")
        }
    }
    console.log("----------")
}
