// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "abc123";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@google.com",
    fullname: {
        userfullname: {
            firstname: "Rahul",
            lastname: "Yadav"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
const obj4 = {5: "a", 6: "b"};

// const obj3 = {obj1, obj2};
// const obj3 = Object.assign(obj1,obj2);
// const obj3 = Object.assign({},obj1,obj2,obj4);
const obj3 = {...obj1, ...obj2, ...obj4};
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@google.com"
    },
    {
        id: 1,
        email: "h@google.com"
    },
    {
        id: 1,
        email: "h@google.com"
    }
]

users[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLogged"));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));