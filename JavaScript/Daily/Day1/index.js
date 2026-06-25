function func(name , age){
    return console.log("Regular Funtion", name , age);
}

const greetUser = (username, city) => {
    return console.log("Welcome", username, "from", city);
};

greetUser("Rahul", "Delhi");

const calculateDiscount = function(amount, discount) {
    return console.log("Discounted Price:", amount - discount);
};

calculateDiscount(1000, 200);

// javascript provides function similar to most of the scripting and the programmig language.
// In javascript,a function allows you to define a block of code,
//  give it a name and then execute it as many time as you want.



//Q-1
function showMessage() {
    console.log("This is a function with zero parameters");
}

showMessage();


// Q-2

const message = () => {
    console.log("This is an arrow function with zero parameter");
};

message();

//Q-3

function personDetails(firstName, lastName, age) {
    return firstName + " is " + age + " years old";
}

console.log(personDetails("A", "", 99));
















// let arr = ['hello','we','are','developer']

// console.log(arr);

// let arr1=[4,44,5,2,1,0]
// res1=arr1.sort()
// console.log(res1);








// let arr = ['Jarvis','the','Developer']
// console.log(arr);

// arr.push("Developer");
// console.log(arr);

// let arr2 = ["Jarvis", "the", "Developer"];
// console.log(arr2.slice(1, 2));

// let arr3 = [1, 4, 9, 16];
// console.log(arr3.map(x => x * 2));

// let arr4 = ["Jarvis", "the", "Developer"];
// arr4.pop();
// console.log(arr4);

// console.log(output);








// let arr = [1, 2, 3, 4, 5];

// let output = "";


// output += "Length: " + arr.length + "\n";


// output += "Filter (x > 3): " + arr.filter(x => x > 3) + "\n";


// output += "Find (x == 2): " + arr.find(x => x == 2) + "\n";


// output += "FindIndex (x == 2): " + arr.findIndex(x => x == 2) + "\n";


// let temp = "";
// arr.forEach(x => temp += x + " ");
// output += "ForEach: " + temp + "\n";

// s
// output += "Includes (5): " + arr.includes(5) + "\n";


// output += "Reverse: " + [...arr].reverse() + "\n";


// let shiftArr = [...arr];
// shiftArr.shift();
// output += "Shift: " + shiftArr + "\n";


// let unshiftArr = [...arr];
// unshiftArr.unshift(10);
// output += "Unshift (10): " + unshiftArr + "\n";


// output += "toString: " + arr.toString() + "\n";


// let pushArr = [...arr];
// pushArr.push(99);
// output += "Push (99): " + pushArr + "\n";


// let popArr = [...arr];
// popArr.pop();
// output += "Pop: " + popArr + "\n";


// output += "Slice (1,4): " + arr.slice(1, 4) + "\n";


// output += "Map (x*2): " + arr.map(x => x * 2) + "\n";

 

// document.getElementById("output").innerText = output;
// console.log(output);