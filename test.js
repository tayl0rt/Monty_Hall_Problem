var doors = {
	"one": "",
	"two": "",
	"three": ""
}

var montyArray = ['goat', 'goatTwo', 'prize'];

var montyFunc = function(doorNumber) {

	const selector = Math.floor(Math.random()*montyArray.length);

	doors[doorNumber] = montyArray[selector];
	console.log("===================");
	console.log("Door " + doorNumber + " = " + doors[doorNumber])
	// console.log(doors[doorNumber] + " is the door assignment");
	montyArray.splice(selector, 1);
}

montyFunc("one");
montyFunc("two");
montyFunc("three");


var stringArray = ["one", "two", "three"];

const selectorTwo = Math.floor(Math.random()*stringArray.length);

var userPick = stringArray[selectorTwo];
console.log("===================");
console.log("User picks = " + userPick);
console.log(doors[userPick] + " is what is behind User's door");
console.log("===================");
