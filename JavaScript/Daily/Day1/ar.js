let arr = [1, 2, 3, 4, 5];

console.log("length:", arr.length);

console.log("filter:", arr.filter(x => x > 3));

console.log("find:", arr.find(x => x == 2));

console.log("findIndex:", arr.findIndex(x => x == 2));

console.log("forEach:");
arr.forEach(x => console.log(x));

console.log("includes:", arr.includes(5));

console.log("map:", arr.map(x => x * 2));

let arr1 = [1, 2, 3, 4, 5];
console.log("pop:", arr1.pop());
console.log("after pop:", arr1);

let arr2 = [1, 2, 3, 4, 5];
console.log("push:", arr2.push(10));
console.log("after push:", arr2);

let arr3 = [1, 2, 3, 4, 5];
console.log("reverse:", arr3.reverse());

let arr4 = [1, 2, 3, 4, 5];
console.log("shift:", arr4.shift());
console.log("after shift:", arr4);

let arr5 = [1, 2, 3, 4, 5];
arr5.splice(0, 1, 10);
console.log("splice:", arr5);

let arr6 = [1, 2, 3, 4, 5];
console.log("unshift:", arr6.unshift(10));
console.log("after unshift:", arr6);

console.log("toString:", arr.toString());