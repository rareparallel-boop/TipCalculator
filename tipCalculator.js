/* Tip Calculator 
This program prompts the user for the cost of a meal
and the tip percentage. Then it calculates the total
cost of the meal and displays it.*/

// Get the cost of the meal from the user
const mealCost = parseFloat(prompt("Enter the cost of the meal:"));

//Get the tip percentage from the user
const tipPercentage = parseFloat(prompt("Enter the tip percentage:"));

//Calculate the tip amount
const tipAmount = mealCost * (tipPercentage / 100);

//Calculate the total cost of the meal
const totalCost = mealCost + tipAmount;

//Display the total cost of the meal
alert(`Meal Cost: $${mealCost.toFixed(2)}
Tip Percent: ${tipPercentage}%
Tip Amount: $${tipAmount.toFixed(2)}
Total Cost: $${totalCost.toFixed(2)}`);

