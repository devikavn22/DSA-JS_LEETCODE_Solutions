let numbers = [1, 2, 3, 4];

// Using a loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Using forEach
numbers.forEach((num) => console.log(num));

// Using map to create a new array
let squares = numbers.map((num) => num * num);
console.log(squares); // Output: [1, 4, 9, 16]
