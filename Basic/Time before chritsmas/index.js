dateToday= new Date();
console.log(dateToday);
yearToday= dateToday.getFullYear();

miliSecDay= 24*60*60*1000;

if (dateToday.getMonth() ==11 && dateToday.getDate()>25){
    dateChristmas= new Date(yearToday+1, 11, 25)
} else{
    dateChristmas= new Date(yearToday, 11, 25)
}
console.log(dateChristmas);

milRem= dateChristmas.getTime() - dateToday.getTime();
dayRem= parseInt(milRem/miliSecDay);
console.log(dayRem);

document.getElementById('result').outerHTML= dayRem;

