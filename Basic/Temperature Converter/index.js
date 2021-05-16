function Far(){
    cel= document.getElementById('temp').value;
    Far=(9*cel)/5 +32;
    document.getElementById('resultFar').outerHTML=Far;

}

function Cel(){
    far= document.getElementById('temp').value;
    Cel=(far-32)*(5/9);
    document.getElementById('resultCel').outerHTML=Cel;

}