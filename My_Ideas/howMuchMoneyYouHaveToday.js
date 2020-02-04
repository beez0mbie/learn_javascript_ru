let date = new Date();
let localeDate = date.toLocaleDateString().split("/");

/*
I found this a bit confusing, so to clarify in case it helps anyone: 
For the Javascript Date function, the second argument is month, starting with 0. 
The third argument is day, starting with 1. When you pass a 0 to the third 
argument instead, it uses the last day of the previous month. If you were to 
pass -1 as the third argument, it would be the second to last day of the 
previous month (it's decrementing). This is why this works, but the month 
has to start with 1 instead of 0 as is normal with Javascript dates, because 
it's actually switching to the previous month because the day number is 0. 
*/
let daysInMonth = (month, year) => new Date(year, month, 0).getDate();

let daysForNextMonth =
  daysInMonth(localeDate[0], localeDate[2]) - localeDate[1] + 1; //includes current day

let howMuchMoneyYouHaveToday = (moneyWhichYouHave) =>
  Math.round(moneyWhichYouHave / daysForNextMonth);

console.log('This is how much money you can spend today:', howMuchMoneyYouHaveToday(3450));
