// Stack (Primitive) :- you gets a copy
// Heap (Non-Primitive) :- you gets a reference

let myYoutubename = "rydotcom";

let anothername = myYoutubename;
anothername = "chaiaurcode";

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;
userTwo.email = "ry@google.com";

console.log(userOne.email);
console.log(userTwo.email);
