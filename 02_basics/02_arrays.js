const marvel_heroes = ["Thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "Flash", "Batman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

// const allHeroes = marvel_heroes.concat(dc_heroes);
// console.log(allHeroes);

// const allNewHeroes = [...marvel_heroes, ...dc_heroes];
// console.log(allNewHeroes);

const another_array = [1,2,3,[4,5],6,[7,8,[7,6]],4];
const usable_array = another_array.flat(Infinity);
console.log(usable_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "Hitesh"})); // interesting

let score1 = 100;
let score2 = 243;
let score3 = 185;

console.log(Array.of(score1,score2,score3));
