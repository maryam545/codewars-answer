//Do I get a bonus?:
// function bonusTime(salary, bonus) {
//   let total;
//   if (bonus) {
//     total = salary * 10;
//   } else {
//     total = salary;
//   }
//   return "£" + total;
// }
// console.log(bonusTime(50, true));
/**
 *
 *
 */
//Abbreviate a Two Word Name:
// function abbrevName(name) {
//   let nameArray = name.split(" ");
//   return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
// }

// console.log(abbrevName("maryam chahardoli"));
/**
 *
 *
 *
 */
//Total amount of points
// function points(games) {
//   let sum = 0;
//   for (let i = 0; i < games.length; i++) {
//     if (games[i][0] > games[i][2]) sum += 3;
//     else if (games[i][0] == games[i][2]) sum += 1;
//   }
//   return sum;
// }
// console.log(points(["3:1", "2:2", "0:1"]));
/**
 *
 *
 *
 */
//Convert a string to an array
function stringToArray(string) {
  return string.split(" ");
}
console.log(stringToArray("hi my name is mary"));
