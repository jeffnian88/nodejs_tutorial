var startDate = new Date();
console.log("startDate:", startDate);
startDate.setHours(0);
startDate.setMinutes(0);
startDate.setSeconds(0);
console.log("startDate:", startDate);
startDate.setHours(startDate.getHours() - 8);
console.log("startDate:", startDate);

console.log(Date.now());