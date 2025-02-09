// singleton (constructor method)
// Object.create()

// Object literals

const mySymbol = Symbol("Key1");

const JsUser = {
    name: "Hitesh",
    "Full name": "Rahul Yadav",
    [mySymbol]: "myKey1",
    age: 23,
    location: "Alwar",
    email: "ry@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full name"]);
// console.log(JsUser[mySymbol]);
// console.log(typeof(JsUser.mySymbol));

JsUser.email = "ry@chatgpt.com";
// Object.freeze(JsUser);
// JsUser.email = "ry@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS Users");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS Users, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
