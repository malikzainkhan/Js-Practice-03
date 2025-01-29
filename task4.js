// 4️⃣ Bus Queue Simulation
// Concepts: unshift(), push(), shift()
// Task:4
// Create an array busQueue = ["Alice", "Bob", "Charlie"].
// A new passenger "David" joins at the end.
// Another passenger "Emma" joins at the front..
// The first person in the queue boards the bus. Remove them.
// Print the final queue.

var busQueue = ["Alice", "Bob", "Charlie"];
busQueue.push("David");
busQueue.unshift("Emma");
busQueue.splice(0, 1);
console.log(busQueue);
