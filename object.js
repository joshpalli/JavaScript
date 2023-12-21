let dog = { name: "Billy", weight: 3.5, color: "Brown", breed: "Gold Retriever", age: 4 };
console.log(dog.name + " is a " + dog.color + " " + dog.breed + ".");

// change the object attributes
dog["name"] = "John";
dog.color = "Gold";
console.log(dog.name + " is a " + dog.color + " " + dog.breed + ".");
console.log(dog);