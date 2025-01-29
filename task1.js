// Task:1

// Create an empty array groceryList.
// Add "Milk", "Eggs", "Bread" to the list.
// Remove the last item.
// Add "Fruits" at the beginning.
// Remove the first item.
// Print the final list.
var groceryList = [];
groceryList.push('milk', 'bread', 'eggs');
groceryList.pop();
groceryList.unshift('Fruits');
groceryList.shift();
console.log(groceryList);
