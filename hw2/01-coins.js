/** Exercise 01 - Coins **/

// Add your function here
function calculateChange(price) {
  if (price < 0) return "$0.00";
  if (price > 100) return "$" + price + " ==> Error: the number is too large";
  let rem = price % 1;
  const dollars = Math.floor(price);
  let remainder = (price - dollars) * 100;
  const quarters = Math.floor(remainder / 25);
  remainder -= quarters * 25;
  const dimes = Math.floor(remainder / 10);
  remainder -= dimes * 10;
  const nickles = Math.floor(remainder / 5);
  remainder -= nickles * 5;
  remainder = Math.floor(remainder);
  string = "$" + price + " ==> ";
  let comma = false;
  let name = " dollars";
  if (dollars != 0) {
    if (dollars == 1) name = " dollar";
    string = string + dollars + name;
    comma = true;
  }
  if (quarters != 0) {
    name = " quarters";
    if (quarters == 1) name = " quarter";
    if (comma) string = string + ", ";
    string = string + quarters + name;
    comma = true;
  }
  if (dimes != 0) {
    name = " dimes";
    if (dimes == 1) name = " dime";
    if (comma) string = string + ", ";
    string = string + dimes + name;
    comma = true;
  }
  if (nickles != 0) {
    name = " nickles";
    if (nickles == 1) name = " nickle";
    if (comma) string = string + ", ";
    string = string + nickles + name;
    comma = true;
  }
  if (remainder != 0) {
    name = " pennies";
    if (remainder == 1) name = " penny";
    if (comma) string = string + ", ";
    string = string + remainder + name;
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
