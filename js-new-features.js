// Novas funcionalidades do JavaScript ES6+

// Operador de espalhamento (spread operator) ...

// Spread em arrays

const fruits = ["banana", "apple", "pineapple", "melon"];
const otherFruits = ["coconut", "strawberry", "orange", "pear"];
// Criar um clone tirando a referência à array original
const fruits2 = [...fruits];

// Concatenar duas arrays
console.log([...fruits, ...otherFruits]);

// Adicionar um novo elemento ao clone da array original, sem modificar a array original
// fruits2.push("strawberry");
const newArr = [...fruits, "strawberry"];

// Tirar duplicatas de uma array
const numbers = [1, 1, 2, 2, 3, 3];
console.log([...new Set(numbers)]);

console.log("fruits2", fruits2);
console.log("fruits", fruits);
console.log("newArr", newArr);

// console.log(...fruits);

// Spread em objetos

const person = { name: "João", age: 32, city: "Curitiba" };
// Criar um clone sem a referencia à array original
const person2 = { ...person };

person2.favoriteFood = "Pizza";

console.log("person", person);
console.log("person2", person2);

// Adicionar uma nova propriedade sem modificar o objeto original

const personClone = { ...person, job: "Web Developer" };

console.log(personClone);

// Editar uma propriedade existente sem afetar o objeto original

const newPerson = { ...person, name: "Maria" };

console.log(newPerson);

// Retirar uma propriedade do clone sem afetar o objeto original

const { city, ...personWithoutCity } = newPerson;

console.log(personWithoutCity);

// Desestruturação de arrays e objetos (Array & Object destrutucturing)

// Rest parameter

// for...in & for...of
