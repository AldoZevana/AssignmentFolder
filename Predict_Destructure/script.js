//PROBLEM 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//It will output Tesla and Mercedes on the console.
console.log(randomCar)
console.log(otherRandomCar)

//PROBLEM 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//There will be an error because of the variable name not being difined.
console.log(name);
console.log(otherName);

//PROBLEM 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//The code will output the password and the hashedPassword.
console.log(password);
console.log(hashedPassword);

//PROBLEM 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//There doesn't seem to be any syntax mistakes or logical ones so it should either output true or false for the comparisons.
console.log(first == second);
console.log(first == third);

//PROBLEM 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//The logic is sound so it should output all of the variables.
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);








