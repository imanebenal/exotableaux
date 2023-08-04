const myAlphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "$",
    "*",
    "/",
    "-",
    "+",
  ];
 
  console.log("Length of myAlphabet array:", + myAlphabet.length);

  function myAlphabetLength() {
      console.log("Longueur de mon tableau " + myAlphabet.length);
    }
myAlphabetLength()

const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter"];

  console.log("List of planets:");
for (const planet of planets) {
  console.log(planet);
}
console.log("List of planets:");

planets.forEach(function(element, index) {
    console.log(element, index);
  });
  const someDataTypes = [23, "imane , ben ali", true, null];
console.log(someDataTypes);

console.log("Data Types in someDataTypes array:");
for (let i = 0; i < someDataTypes.length; i++) {
  console.log(`Index ${i}:`, typeof someDataTypes[i]);
}

const emptyArray = [];
console.log("emptyArray",emptyArray);
emptyArray.push("imane ben ali");
emptyArray.push(23);
emptyArray.push(true);
emptyArray.push(null);
emptyArray.push({fruit: 'Ananas', color: 'Yellow' });

console.log("Updated Array:", emptyArray);

const furnitures = ['Table', 'Chairs', 'Couch'];

console.log("Letters in each item of the 'furnitures' array:");

furnitures.forEach((item, index) => {
  for (let i = 0; i < item.length; i++) {
    console.log(` Letter ${i}:`, item[i]);
  }
});

let values1 = ["Apple", 1, false, "2"];
let values2 = [`5`, "Fries", 2, true];
let values3 = ["Mars", "Strawberry", 9];

values1 = values1.filter(item => typeof item === "number");
values2 = values2.filter( item => typeof item === "number");
values3 = values3.filter(item => typeof item === "number");

console.log("delete:", values1);
console.log("delete:", values2);
console.log("delete:", values3);

let studentCoursesA = ['Math', 'English', 'Programming'];
let studentCoursesB = ['Geography', 'Spanish', 'Programming'];

let commonwords = studentCoursesA.filter(course => studentCoursesB.includes(course));

console.log("Mots communs :", commonwords);
