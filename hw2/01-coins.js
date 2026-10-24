/** Exercise 01 - Coins **/

// Add your function here
function calculateChange(price) {
  if (price < 0) return "$0.00";
  if (price > 100) return "$" + price + " ==> Error: the number is too large";
  let rem = price % 1;
  let dollars,
    quarts,
    dimes,
    nickles,
    pennies = 1;
  string = "$" + price + " ==> ";
  if (price - rem > 0) {
    dollars = price - rem;
    string = string + dollars + "dollars, ";
  }
  if (rem > 0.25) {
    quarts = (rem / 0.25).floor;
    string = string + quarts + " quarters,";
  }
  if (rem - 0.25 * quarts >= 0.1) {
    dimes = (rem / 0.1).floor;
    string = string + dimes + " dimes";
  }
  if (rem - 0.25 * quarts - 0.1 * dimes >= 0.5) {
    nickles = 1;
    string = string + nickles + " nickles";
  }
  if (rem - 0.25 * quarts - 0.1 * dimes - nickles * 0.5 > 0) {
    pennies = rem - 0.25 * quarts - 0.1 * dimes - nickles * 0.5;
    string = string + pennies + " pennies";
  }
  return string;
}
// Sample test cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(150.11));
// $150.11 ==> Error: the number is too large

// Add additional test cases here
