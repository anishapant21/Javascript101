const sides=[5, 6, 7]

function calculate_area(){
    
    s=(sides[0]+sides[1]+sides[2])/2;
    area=Math.sqrt(s*(s-sides[0])*(s-sides[1])*(s-sides[2]));
    document.getElementById("areaIs").outerHTML=area;

}


