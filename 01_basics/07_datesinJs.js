let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof(myDate));

// let myCreatedDate = new Date(2023,0,23);
// let myCreatedDate = new Date(2023,0,23,5,23,17);
let myCreatedDate = new Date("2023-07-08");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})
